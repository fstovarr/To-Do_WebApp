<template>
  <v-container>
    <v-dialog v-model="dialogs.editTask" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Edit task</v-card-title>

        <div style="padding: 20px;">
          <v-text-field label="Description" v-model="task.description"></v-text-field>
          <v-select :items="states" label="State" v-model="task.state"></v-select>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="() => {dialogs.editTask = false; this.task = {}}"
          >Cancel</v-btn>
          <v-btn color="primary" text @click="updateTask()">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogs.addTask" width="500">
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
          v-if="selectedUser.name"
        >Add task to {{ selectedUser.name }}</v-card-title>

        <div style="padding: 20px;">
          <v-text-field label="Description" v-model="task.description"></v-text-field>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="() => {dialogs.addTask = false; this.task = {}}"
          >Cancel</v-btn>
          <v-btn color="primary" text @click="addTask()">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogs.user" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Editar usuario</v-card-title>

        <div style="padding: 20px;">
          <v-text-field
            label="Name"
            :value="selectedUser.name"
            @change="text => this.selectedUser.name = text"
          ></v-text-field>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="() => {dialogs.user = false; this.selectedUser = {}}"
          >Cancel</v-btn>
          <v-btn color="primary" text @click="updateUserSelected()">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-layout text-center wrap>
      <v-flex class="card-container">
        <v-card class="mx-auto card" shaped>
          <v-card-title>USERS</v-card-title>

          <v-list class="overflow-y-auto" style="max-height: 70vh">
            <template v-for="item in users">
              <v-list-item :key="item.id">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="d-flex">
                    <v-btn icon @click="userSelected(item)">
                      <v-icon color="grey lighten-1">{{icons.mdiEye}}</v-icon>
                    </v-btn>

                    <v-btn icon @click.stop="openDialog(item)">
                      <v-icon color="grey lighten-1">{{icons.mdiPencil}}</v-icon>
                    </v-btn>

                    <v-btn icon @click="deleteUserSelected(item.id)">
                      <v-icon color="grey lighten-1">delete</v-icon>
                    </v-btn>
                  </div>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex class="card-container">
        <v-card class="mx-auto card" shaped>
          <v-card-title>TASKS</v-card-title>

          <div
            class="d-flex"
            style="padding-left: 20px; margin-bottom: 20px;"
            v-if="tasks != undefined"
          >
            <v-btn rounded color="accent" dark @click="dialogs.addTask = true">Add task</v-btn>
          </div>

          <v-list v-if="tasks != undefined && tasks.length > 0">
            <v-list-item
              v-for="item in tasks"
              :key="item.id"
              style="padding-left: 40px; padding-right: 40px;"
            >
              <v-icon v-if="item.state == 'todo'">{{icons.mdiCheckboxBlankOutline}}</v-icon>
              <v-icon v-else>{{icons.mdiCheckBoxOutline}}</v-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.description"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <div class="d-flex">
                  <v-btn icon @click.stop="editTaskUser(item)">
                    <v-icon color="grey lighten-1">{{icons.mdiPencil}}</v-icon>
                  </v-btn>

                  <v-btn icon @click="deleteTaskSelected(item.id)">
                    <v-icon color="grey lighten-1">delete</v-icon>
                  </v-btn>
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <p
            class="font-weight-light"
            v-if="tasks != undefined && tasks.length == 0"
          >This user have not tasks yet</p>

          <p class="font-weight-light" v-if="tasks == undefined">Select a user to see their tasks</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Http from "../util/http_common";
import {
  mdiCheckboxBlankOutline,
  mdiCheckBoxOutline,
  mdiPencil,
  mdiEye
} from "@mdi/js";

export default Vue.extend({
  name: "HelloWorld",
  created() {
    this.states = [
      { text: "To-Do", value: "todo" },
      { text: "Done", value: "done" }
    ];
    this.icons = {
      mdiCheckboxBlankOutline,
      mdiCheckBoxOutline,
      mdiPencil,
      mdiEye
    };
  },
  data: () => ({
    task: {},
    dialogs: { addTask: false, editTask: false, user: false },
    tasks: undefined,
    selectedUser: {},
    users: []
  }),
  beforeMount: function() {
    this.loadUsers();
  },
  methods: {
    deleteTaskSelected: async function(id) {
      try {
        let response = await Http.delete(`/tasks/${id}`);
        this.userSelected(this.selectedUser);
      } catch (error) {
        console.error(error);
      }
    },
    editTaskUser(task) {
      this.task = task;
      this.dialogs.editTask = true;
    },
    updateTask: async function() {
      try {
        let { state, description } = this.task;
        let response = await Http.put(`/tasks/${this.task.id}`, {
          user_task: { state: state, description: description }
        });
        this.userSelected(this.selectedUser);
        this.task = {};
        this.dialogs.editTask = false;
      } catch (error) {
        console.error(error);
      }
    },
    addTask: async function() {
      try {
        let response = await Http.post("/tasks", {
          user_task: {
            description: this.task.description,
            user_id: this.selectedUser.id
          }
        });
        this.task = {};
        this.userSelected(this.selectedUser);
        this.dialogs.addTask = false;
      } catch (error) {
        console.error(error);
      }
    },
    loadUsers: async function() {
      try {
        let response = await Http.get("/users");
        console.log(response.data);
        this.$data.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openDialog(item) {
      this.selectedUser = item;
      this.dialogs.user = true;
    },
    userSelected: async function(item) {
      this.selectedUser = item;
      try {
        let response = await Http.get(`/tasks/${item.id}`);
        this.tasks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    deleteUserSelected: async function(id) {
      try {
        let response = await Http.delete(`/users/${id}`);
        this.loadUsers();
        this.tasks = undefined;
      } catch (error) {
        console.error(error);
      }
    },
    updateUserSelected: async function() {
      try {
        let response = await Http.put(
          `/users/${this.selectedUser.id}`,
          this.selectedUser
        );
        this.loadUsers();
        this.dialogs.user = false;
      } catch (error) {
        console.error(error);
      }
    }
  }
});
</script>
<style>
.card-container {
  padding: 10px;
}
.card {
  margin: 30px;
  margin-top: 10px;
  padding-bottom: 10px;
}
</style>