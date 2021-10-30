import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type StockMetaData = {
  readOnlyFields: 'updatedAt';
}

type PictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Stock {
  readonly id: string;
  readonly name: string;
  readonly quantity: number;
  readonly creatorID: string;
  readonly createdAt: string;
  readonly description: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Stock, StockMetaData>);
  static copyOf(source: Stock, mutator: (draft: MutableModel<Stock, StockMetaData>) => MutableModel<Stock, StockMetaData> | void): Stock;
}

export declare class Picture {
  readonly id: string;
  readonly name?: string;
  readonly file?: S3Object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Picture, PictureMetaData>);
  static copyOf(source: Picture, mutator: (draft: MutableModel<Picture, PictureMetaData>) => MutableModel<Picture, PictureMetaData> | void): Picture;
}