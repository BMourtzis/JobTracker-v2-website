import main from '@/components/Client/main';
import add from '@/components/Client/add';
import details from "@/components/Client/details";
import edit from "@/components/Client/edit";

export default [
  {
    path: '/client',
    name: 'Client',
    component: main
  },
  {
    path: '/client/add',
    name: 'addClient',
    components: {
      default: main,
      dialog: add
    }
  },
  {
    path: '/client/:clientId/details',
    name: "clientDetails",
    components: {
      default: main,
      dialog: details
    },
    props: {
      default: false,
      dialog: true
    }
  },
  {
    path: '/client/:clientId/edit',
    name: "clientUpdate",
    components: {
      default: main,
      dialog: edit
    },
    props: {
      default: false,
      dialog: true
    }
  }
];
