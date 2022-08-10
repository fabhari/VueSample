<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <!-- Toggle Between Forms to test them -->
          <!-- <Form /> -->
          <RefactoredForm/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Form from "./components/Form";
import RefactoredForm from "./components/RefactoredForm";

export default {
  name: "App",
  components: {
    Form,
    RefactoredForm
  }
};
</script>
