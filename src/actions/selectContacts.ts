export interface SelectContactsAction {
  type: 'selectContacts'
  url: string
}

export function selectContacts(url: string): SelectContactsAction {
  return {
    type: 'selectContacts',
    url,
  }
}

export interface SelectContactsContact {
  recordID: string
  phoneNumber: {
    label: string
    number: string
  }
  familyName: string
  givenName: string
  middleName: string
}
