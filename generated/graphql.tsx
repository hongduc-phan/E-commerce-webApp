import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Ppl>>;
  ppl?: Maybe<Array<Ppl>>;
  allProducts?: Maybe<Array<Product>>;
  product?: Maybe<Array<Product>>;
};


export type QueryAllUsersArgs = {
  skip?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['String']>;
};


export type QueryPplArgs = {
  queryStr?: Maybe<Scalars['String']>;
};


export type QueryAllProductsArgs = {
  skip?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['String']>;
};


export type QueryProductArgs = {
  queryStr?: Maybe<Scalars['String']>;
};

export type Ppl = {
  __typename?: 'Ppl';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  status: Scalars['Boolean'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOnePpl: Ppl;
  deleteOnePpl?: Maybe<Ppl>;
  deleteManyPpl: BatchPayload;
  updateOnePpl?: Maybe<Ppl>;
  updateManyPpl: BatchPayload;
  removeAllProducts?: Maybe<Scalars['String']>;
  removeProductById?: Maybe<Product>;
  updateProductById?: Maybe<Product>;
  createNewOneProduct?: Maybe<Product>;
  createOneProduct: Product;
  deleteOneProduct?: Maybe<Product>;
  deleteManyProduct: BatchPayload;
  updateOneProduct?: Maybe<Product>;
  updateManyProduct: BatchPayload;
};


export type MutationCreateOnePplArgs = {
  data: PplCreateInput;
};


export type MutationDeleteOnePplArgs = {
  where: PplWhereUniqueInput;
};


export type MutationDeleteManyPplArgs = {
  where?: Maybe<PplWhereInput>;
};


export type MutationUpdateOnePplArgs = {
  data: PplUpdateInput;
  where: PplWhereUniqueInput;
};


export type MutationUpdateManyPplArgs = {
  data: PplUpdateManyMutationInput;
  where?: Maybe<PplWhereInput>;
};


export type MutationRemoveProductByIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationUpdateProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateNewOneProductArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};

export type PplCreateInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['String'];
  status?: Maybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type PplWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type PplWhereInput = {
  email?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<StringFilter>;
  status?: Maybe<BooleanFilter>;
  username?: Maybe<StringFilter>;
  AND?: Maybe<Array<PplWhereInput>>;
  OR?: Maybe<Array<PplWhereInput>>;
  NOT?: Maybe<Array<PplWhereInput>>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type PplUpdateInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type PplUpdateManyMutationInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProductWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
};

export type ProductUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<(
    { __typename?: 'Ppl' }
    & Pick<Ppl, 'id' | 'username' | 'email' | 'password' | 'role' | 'status'>
  )>> }
);

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
  )>> }
);


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    id
    username
    email
    password
    role
    status
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};
export const AllProductsDocument = gql`
    query AllProducts {
  allProducts {
    id
    name
  }
}
    `;

export function useAllProductsQuery(options: Omit<Urql.UseQueryArgs<AllProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllProductsQuery>({ query: AllProductsDocument, ...options });
};