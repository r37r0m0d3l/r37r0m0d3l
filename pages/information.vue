<template>
  <v-layout justify-center align-center class="pl-2 pr-2">
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline flex text-center">
          <h2>Information</h2>
        </v-card-title>
        <v-card-text>
          <v-row cols="1">
            <v-col class="xl-12">
              <h3>Not much here. But you can download my resume!</h3>
            </v-col>
          </v-row>
          <v-row cols="2">
            <v-col class="xl-6">
              <v-btn
                block
                color="amber"
                dark
                download
                href="downloads/resume_anton_trofimenko_nodejs_backend.html"
                target="_blank"
                x-large
              >
                <v-icon>mdi-language-html5</v-icon>
                .HTML
              </v-btn>
            </v-col>
            <v-col class="xl-6">
              <v-btn
                block
                color="primary"
                dark
                download
                href="downloads/resume_anton_trofimenko_nodejs_backend.odt"
                target="_blank"
                x-large
              >
                <v-icon>mdi-file-document</v-icon>
                .ODT
              </v-btn>
            </v-col>
          </v-row>
          <v-row cols="2">
            <v-col class="xl-6">
              <v-btn
                block
                color="blue"
                dark
                download
                href="downloads/resume_anton_trofimenko_nodejs_backend.rtf"
                target="_blank"
                x-large
              >
                <v-icon>mdi-file-word</v-icon>
                .DOC
              </v-btn>
            </v-col>
            <v-col class="xl-6">
              <v-btn
                block
                color="red"
                dark
                download
                href="downloads/resume_anton_trofimenko_nodejs_backend.pdf"
                target="_blank"
                x-large
              >
                <v-icon>mdi-file-pdf</v-icon>
                .PDF
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
