import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmailListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EmailList {
  readonly id: string;
  readonly Email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EmailList, EmailListMetaData>);
  static copyOf(source: EmailList, mutator: (draft: MutableModel<EmailList, EmailListMetaData>) => MutableModel<EmailList, EmailListMetaData> | void): EmailList;
}