import { serverSupabaseUser } from "#supabase/server";
import { Prisma, PrismaClient } from '@prisma/client'
import { MenuOption } from "~~/typings/System";

const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {
  const userSession = await serverSupabaseUser(event)

  if(!userSession) {
    console.error(`Error at ${event.path}. Unauthorized`);
    const error = createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
    sendError(event, error, false);
  }
  
  try{
    const data = await prisma.$queryRaw`
      select
      d.id, d.parent, d.position, d.link, d.name_es, d.icon, d.comment_es
      from sys_profiles_users a
      inner join sys_profiles b on a.sys_profile_id = b.id
      inner join sys_profiles_links c on c.sys_profile_id = b.id
      inner join sys_links d on c.sys_link_id = d.id
      ${Prisma.raw(`where a.user_id = '${userSession?.id}'`)}
      order by d.position
    `;
    return data as MenuOption[];
  }catch(err) {
    console.error(`Error at ${event.path}. ${err}`);
    const error = createError({
      statusCode: 500,
      statusMessage: 'Unhandled exception',
    });
    sendError(event, error, false);
  }
});
