import {requiredRule, emailRule} from "./rules";
import {SINGLE_LINE_TEXT, SPACER, SUBHEADING, LIST} from "./formGenerator";

export const mainHeaders = [
  {
    text: "Buisness Name",
    value: "businessName",
    align: "center"
  },
  {
    text: "Full Name",
    value: "fullname",
    align: "center"
  },
  {
    text: "Invoice Prefix",
    value: "invoicePrefix",
    align: "center"
  },
  {
    text: "Actions",
    value: "actions",
    align: "center"
  }
];

export const clientSchema = [
  {type: SINGLE_LINE_TEXT, name: "businessName", label: "Business Name", rules: [requiredRule], largeQuarter: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "invoicePrefix", label: "Invoice Prefix", rules: [requiredRule], smallQuarter: true, required: true, counter: 4, mask: "AAAA"},
  {type: SINGLE_LINE_TEXT, name: "address", label: "Addresss", rules: [requiredRule], full: true, required: true},
  {type: SPACER},
  {type: SUBHEADING, label: "Contact Details"},
  {type: SINGLE_LINE_TEXT, name: "firstname", label: "First Name", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "lastname", label: "Last Name", rules: [requiredRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "email", fieldType: "email", label: "Email", rules: [requiredRule, emailRule], half: true, required: true},
  {type: SINGLE_LINE_TEXT, name: "primaryPhone", label: "Primary Phone", rules: [requiredRule], half: true, required: true, mask: "phone"},
  {type: SPACER},
  {type: SUBHEADING, label: "Additional Contacts"},
  {type: LIST, name: "contacts", addBtnName: "New Phone", fields: [
    {type: SINGLE_LINE_TEXT, name: "name", label: "Contact Name", rules: [requiredRule], small: true, required: true},
    {type: SINGLE_LINE_TEXT, name: "phone", label: "Phone", rules: [requiredRule], large: true, required: true, mask: "phone"}
  ]}
];
