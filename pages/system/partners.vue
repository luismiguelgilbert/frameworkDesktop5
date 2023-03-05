<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import { Editor as TinyMCEEditor } from 'tinymce';
// import { exportToPDF } from '#imports'
// import { root } from 'postcss';
// import { Editor } from 'tinymce';
// import { Editor, Editor } from 'tinymce';
// import { Editor } from 'tinymce';

definePageMeta({
  layout: 'default'
})

// const content = ref(null);
//const content = ref<HTMLElement | null>(null)
// const wysiwyg = ref(null);
// const wysiwyg = ref<TinyMCEEditor>();
const config = useRuntimeConfig();
const content = ref<string>('');
const el = ref<HTMLInputElement | null>(null)
// const wysiwyg = ref<InstanceType<typeof Editor> | null>(null)
const wysiwyg = ref<InstanceType<typeof TinyMCEEditor> | null>(null)

const defaultInvoice = `<p>My content</p>
<table style="border-collapse: collapse; width: 99.9991%;" border="1"><colgroup><col style="width: 33.3333%;"><col style="width: 33.3333%;"><col style="width: 33.3333%;"></colgroup>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>4</td>
<td>5</td>
<td>6</td>
</tr>
<tr>
<td>7</td>
<td>8</td>
<td>9</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<p>imagen</p>
<p><img src="https://bitt.com.ec/statics/Logo.png" alt="" width="577" height="208"></p>`;

const editorInit = (event: unknown, editor: TinyMCEEditor) => {
  wysiwyg.value = editor;
  wysiwyg.value.execCommand('mceSetContent', false, defaultInvoice);
  /*wysiwyg.value?.execCommand('mceExportDownload', false, {
    format: 'clientpdf',
    settings: {}
  });*/
}


const saveConfig = () =>  {
  const temp = wysiwyg.value?.getContent();
  console.log(temp);
  // wysiwyg.value?.execCommand('mceExportPdf', false, {filename: 'Invoice'});
  wysiwyg.value?.execCommand('mceExportDownload', false, {
    format: 'clientpdf',
    settings: {}
  });
}

</script>
<template>
  <div>
    <v-btn
      icon="fas fa-save"
      @click="saveConfig">
    </v-btn>
    <v-card
      ref="card"
      width="calc(100vw - 300px)"
      class="pa-5">
      <template #title>
        Personalizar Factura 1
      </template>
      <!--:init="{plugins: ['table','image']}"-->
      <!-- NOT
        'fullscreen', 'preview', 
        toolbar2: 'print media | forecolor backcolor emoticons',
        
        ***********
        plugins not used:
        'wordcount', 'visualblocks', 'visualchars',
        
        'table','image','advlist','autolink','lists', 'link', 'charmap', 'print', 'hr',
        'anchor', 'pagebreak', 'searchreplace', 
        'code', 'insertdatetime', 'media', 'nonbreaking', 'save', 'contextmenu',
        'directionality', 'emoticons', 'template', 'paste', 'textcolor', 'colorpicker',
        'textpattern', , 'export'
        
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

        /*plugins:['lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'template paste textcolor colorpicker textpattern imagetools toc help emoticons hr codesample'],
      -->
      config.public {{ config.public.TINYMCE_APIKEY }}
      <Editor
        v-model="content"
        :api-key="config.public.TINYMCE_APIKEY"
        :init="{
          plugins:[ 'table','export','image' ],
          toolbar:[  ],
          menubar: false,
        }"
        disabled
        @init="editorInit"
        />
        <!--plugins: [
            "autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern imagetools"
        ],
        toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview media | forecolor backcolor emoticons",
        image_advtab: true,
        templates: [
            {title: 'Test template 1', content: 'Test 1'},
            {title: 'Test template 2', content: 'Test 2'}
        ]-->
    </v-card>
  </div>
</template>