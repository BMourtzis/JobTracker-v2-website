import Home from '@/components/main/Home';
import Job from '@/components/main/Job';
import Template from '@/components/main/Template';
import Client from '@/components/main/Client';
import Invoice from '@/components/main/Invoice';
import Calendar from '@/components/main/Calendar';
import Finances from '@/components/main/Finances';
import Settings from '@/components/main/Settings';

export default [
  {
    path: '/',
    name: 'Home',
    components: {
      main: Home
    }
  },
  {
    path: '/job',
    name: 'Job',
    components: {
      main: Job
    }
  },
  {
    path: '/templates',
    name: 'Template',
    components: {
      main: Template
    }
  },
  {
    path: '/client',
    name: 'Client',
    components: {
      main: Client
    }
  },
  {
    path: '/invoice',
    name: 'Invoice',
    components: {
      main: Invoice
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    components: {
      main: Calendar
    }
  },
  {
    path: '/finances',
    name: 'Finances',
    components: {
      main: Finances
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    components: {
      main: Settings
    }
  }
];
