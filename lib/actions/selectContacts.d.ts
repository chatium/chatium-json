export interface SelectContactsAction {
    type: 'selectContacts';
    url: string;
}
export declare function selectContacts(url: string): SelectContactsAction;
export interface SelectContactsContact {
    recordID: string;
    phoneNumber: {
        label: string;
        number: string;
    };
    familyName: string;
    givenName: string;
    middleName: string;
}
