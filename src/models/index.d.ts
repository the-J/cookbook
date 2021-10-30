import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StockMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class Stock {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly creatorID: string;
  readonly createdAt: string;
  readonly description: string;
  readonly imgName: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Stock, StockMetaData>);
  static copyOf(source: Stock, mutator: (draft: MutableModel<Stock, StockMetaData>) => MutableModel<Stock, StockMetaData> | void): Stock;
}