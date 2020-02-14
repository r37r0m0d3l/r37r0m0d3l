<template>
  <v-layout class="pl-2 pr-2">
    <v-flex class="text-center">
      <template>
        <v-card class="mx-auto" max-width="600" raised shaped elevation="24">
          <br />
          <v-card-title class="justify-center">Anton Trofimenko</v-card-title>
          <br />
          <v-avatar size="128">
            <img src="images/avatar.png" alt="" />
          </v-avatar>
          <br />
          <v-card-actions>
            <v-list>
              <!-- -->
              <v-list-item>
                <v-btn
                  color="blue darken-2"
                  href="tel:+380964527871"
                  target="_blank"
                  outlined
                  dark
                  text
                >
                  <v-icon dark large>
                    mdi-phone
                  </v-icon>
                  &nbsp;Phone: <span class="text-u">+380964527871</span>
                </v-btn>
              </v-list-item>
              <!-- -->
              <v-list-item>
                <v-btn
                  color="blue darken-2"
                  href="mailto:trofimenkoantonalex@gmail.com?subject=Job+proposal"
                  target="_blank"
                  outlined
                  dark
                  text
                >
                  <v-icon dark large>
                    mdi-email
                  </v-icon>
                  &nbsp;Email:&nbsp;
                  <span class="hidden-sm-and-down text-u"
                    >trofimenkoantonalex@gmail.com</span
                  >
                  <span class="hidden-md-and-up text-u">Write Email</span>
                </v-btn>
              </v-list-item>
              <!-- -->
              <v-list-item>
                <v-btn
                  color="blue darken-2"
                  href="skype:live:.cid.fdb0990968fee3c"
                  target="_blank"
                  outlined
                  dark
                  text
                >
                  <v-icon dark large>
                    mdi-skype
                  </v-icon>
                  &nbsp;Skype: <span class="text-u">r37r0m0del</span>
                </v-btn>
              </v-list-item>
              <!-- -->
              <v-list-item>
                <v-btn
                  color="blue darken-2"
                  href="https://telegram.im/@r37r0m0d3l"
                  target="_blank"
                  outlined
                  dark
                  text
                >
                  <v-icon dark large>
                    mdi-telegram
                  </v-icon>
                  &nbsp;Telegram: <span class="text-u">r37r0m0del</span>
                </v-btn>
              </v-list-item>
              <!-- -->
            </v-list>
            <br />
          </v-card-actions>
          <br />
        </v-card>
      </template>
    </v-flex>
  </v-layout>
</template>
