export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  GraphCMS_Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  GraphCMS_DateTime: any;
  GraphCMS_Hex: any;
  /** Raw JSON value */
  GraphCMS_Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  GraphCMS_Long: any;
  GraphCMS_RGBAHue: any;
  GraphCMS_RGBATransparency: any;
  /** Slate-compatible RichText AST */
  GraphCMS_RichTextAST: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless: Maybe<Scalars['Boolean']>;
  quality: Maybe<Scalars['Int']>;
  speed: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: Maybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  ne: Maybe<Scalars['Boolean']>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: Maybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type FileConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  children: Maybe<NodeFilterListInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphCms = {
  /** Retrieve a single asset */
  asset: Maybe<GraphCms_Asset>;
  /** Retrieve document version */
  assetVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<GraphCms_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: GraphCms_AssetConnection;
  /** Retrieve a single author */
  author: Maybe<GraphCms_Author>;
  /** Retrieve document version */
  authorVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple authors */
  authors: Array<GraphCms_Author>;
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: GraphCms_AuthorConnection;
  /** Retrieve a single member */
  member: Maybe<GraphCms_Member>;
  /** Retrieve document version */
  memberVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple members */
  members: Array<GraphCms_Member>;
  /** Retrieve multiple members using the Relay connection interface */
  membersConnection: GraphCms_MemberConnection;
  /** Fetches an object given its ID */
  node: Maybe<GraphCms_Node>;
  /** Retrieve a single page */
  page: Maybe<GraphCms_Page>;
  /** Retrieve document version */
  pageVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<GraphCms_Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: GraphCms_PageConnection;
  /** Retrieve a single post */
  post: Maybe<GraphCms_Post>;
  /** Retrieve document version */
  postVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple posts */
  posts: Array<GraphCms_Post>;
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: GraphCms_PostConnection;
  /** Retrieve a single product */
  product: Maybe<GraphCms_Product>;
  /** Retrieve document version */
  productVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<GraphCms_Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: GraphCms_ProductConnection;
  /** Retrieve a single seo */
  seo: Maybe<GraphCms_Seo>;
  /** Retrieve document version */
  seoVersion: Maybe<GraphCms_DocumentVersion>;
  /** Retrieve multiple seos */
  seos: Array<GraphCms_Seo>;
  /** Retrieve multiple seos using the Relay connection interface */
  seosConnection: GraphCms_SeoConnection;
  /** Retrieve a single user */
  user: Maybe<GraphCms_User>;
  /** Retrieve multiple users */
  users: Array<GraphCms_User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: GraphCms_UserConnection;
};


export type GraphCmsAssetArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_AssetWhereUniqueInput;
};


export type GraphCmsAssetVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsAssetsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_AssetWhereInput>;
};


export type GraphCmsAssetsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_AssetOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_AssetWhereInput>;
};


export type GraphCmsAuthorArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_AuthorWhereUniqueInput;
};


export type GraphCmsAuthorVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsAuthorsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_AuthorOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_AuthorWhereInput>;
};


export type GraphCmsAuthorsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_AuthorOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_AuthorWhereInput>;
};


export type GraphCmsMemberArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_MemberWhereUniqueInput;
};


export type GraphCmsMemberVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsMembersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_MemberOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_MemberWhereInput>;
};


export type GraphCmsMembersConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_MemberOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_MemberWhereInput>;
};


export type GraphCmsNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
};


export type GraphCmsPageArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_PageWhereUniqueInput;
};


export type GraphCmsPageVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsPagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_PageOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_PageWhereInput>;
};


export type GraphCmsPagesConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_PageOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_PageWhereInput>;
};


export type GraphCmsPostArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_PostWhereUniqueInput;
};


export type GraphCmsPostVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsPostsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_PostOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_PostWhereInput>;
};


export type GraphCmsPostsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_PostOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_PostWhereInput>;
};


export type GraphCmsProductArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_ProductWhereUniqueInput;
};


export type GraphCmsProductVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsProductsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_ProductWhereInput>;
};


export type GraphCmsProductsConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_ProductWhereInput>;
};


export type GraphCmsSeoArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_SeoWhereUniqueInput;
};


export type GraphCmsSeoVersionArgs = {
  where: GraphCms_VersionWhereInput;
};


export type GraphCmsSeosArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_SeoOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_SeoWhereInput>;
};


export type GraphCmsSeosConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_SeoOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_SeoWhereInput>;
};


export type GraphCmsUserArgs = {
  locales?: Array<GraphCms_Locale>;
  stage?: GraphCms_Stage;
  where: GraphCms_UserWhereUniqueInput;
};


export type GraphCmsUsersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_UserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_UserWhereInput>;
};


export type GraphCmsUsersConnectionArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales?: Array<GraphCms_Locale>;
  orderBy: Maybe<GraphCms_UserOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  stage?: GraphCms_Stage;
  where: Maybe<GraphCms_UserWhereInput>;
};

export type GraphCms_Aggregate = {
  count: Scalars['Int'];
};

/** Asset system model */
export type GraphCms_Asset = GraphCms_Node & {
  authorAvatar: Array<GraphCms_Author>;
  coverImagePost: Array<GraphCms_Post>;
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageProduct: Array<GraphCms_Product>;
  /** System Locale field */
  locale: GraphCms_Locale;
  /** Get the other localizations for this document */
  localizations: Array<GraphCms_Asset>;
  /** The mime type of the file */
  mimeType: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  seoImage: Array<GraphCms_Seo>;
  /** The file size */
  size: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: GraphCms_Stage;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type GraphCms_AssetAuthorAvatarArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<GraphCms_Locale>>;
  orderBy: Maybe<GraphCms_AuthorOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<GraphCms_AuthorWhereInput>;
};


/** Asset system model */
export type GraphCms_AssetCoverImagePostArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<GraphCms_Locale>>;
  orderBy: Maybe<GraphCms_PostOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<GraphCms_PostWhereInput>;
};


/** Asset system model */
export type GraphCms_AssetCreatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


/** Asset system model */
export type GraphCms_AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


/** Asset system model */
export type GraphCms_AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


/** Asset system model */
export type GraphCms_AssetImageProductArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<GraphCms_Locale>>;
  orderBy: Maybe<GraphCms_ProductOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<GraphCms_ProductWhereInput>;
};


/** Asset system model */
export type GraphCms_AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<GraphCms_Locale>;
};


/** Asset system model */
export type GraphCms_AssetPublishedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


/** Asset system model */
export type GraphCms_AssetSeoImageArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<GraphCms_Locale>>;
  orderBy: Maybe<GraphCms_SeoOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<GraphCms_SeoWhereInput>;
};


/** Asset system model */
export type GraphCms_AssetUpdatedAtArgs = {
  variation?: GraphCms_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GraphCms_AssetUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


/** Asset system model */
export type GraphCms_AssetUrlArgs = {
  transformation: Maybe<GraphCms_AssetTransformationInput>;
};

export type GraphCms_AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_AssetConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_AssetCreateInput = {
  authorAvatar: Maybe<GraphCms_AuthorCreateManyInlineInput>;
  coverImagePost: Maybe<GraphCms_PostCreateManyInlineInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  imageProduct: Maybe<GraphCms_ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations: Maybe<GraphCms_AssetCreateLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  seoImage: Maybe<GraphCms_SeoCreateManyInlineInput>;
  size: Maybe<Scalars['Float']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetCreateLocalizationDataInput = {
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetCreateLocalizationInput = {
  /** Localization input */
  data: GraphCms_AssetCreateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>;
};

export type GraphCms_AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create: Maybe<Array<GraphCms_AssetCreateInput>>;
};

export type GraphCms_AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect: Maybe<GraphCms_AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: Maybe<GraphCms_AssetCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Asset;
};

/** Identifies documents */
export type GraphCms_AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  authorAvatar_every: Maybe<GraphCms_AuthorWhereInput>;
  authorAvatar_none: Maybe<GraphCms_AuthorWhereInput>;
  authorAvatar_some: Maybe<GraphCms_AuthorWhereInput>;
  coverImagePost_every: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_none: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_some: Maybe<GraphCms_PostWhereInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  imageProduct_every: Maybe<GraphCms_ProductWhereInput>;
  imageProduct_none: Maybe<GraphCms_ProductWhereInput>;
  imageProduct_some: Maybe<GraphCms_ProductWhereInput>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seoImage_every: Maybe<GraphCms_SeoWhereInput>;
  seoImage_none: Maybe<GraphCms_SeoWhereInput>;
  seoImage_some: Maybe<GraphCms_SeoWhereInput>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type GraphCms_AssetTransformationInput = {
  document: Maybe<GraphCms_DocumentTransformationInput>;
  image: Maybe<GraphCms_ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions: Maybe<Scalars['Boolean']>;
};

export type GraphCms_AssetUpdateInput = {
  authorAvatar: Maybe<GraphCms_AuthorUpdateManyInlineInput>;
  coverImagePost: Maybe<GraphCms_PostUpdateManyInlineInput>;
  fileName: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  imageProduct: Maybe<GraphCms_ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations: Maybe<GraphCms_AssetUpdateLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  seoImage: Maybe<GraphCms_SeoUpdateManyInlineInput>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetUpdateLocalizationDataInput = {
  fileName: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetUpdateLocalizationInput = {
  data: GraphCms_AssetUpdateLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create: Maybe<Array<GraphCms_AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete: Maybe<Array<GraphCms_Locale>>;
  /** Localizations to update */
  update: Maybe<Array<GraphCms_AssetUpdateLocalizationInput>>;
  upsert: Maybe<Array<GraphCms_AssetUpsertLocalizationInput>>;
};

export type GraphCms_AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect: Maybe<Array<GraphCms_AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create: Maybe<Array<GraphCms_AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set: Maybe<Array<GraphCms_AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update: Maybe<Array<GraphCms_AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert: Maybe<Array<GraphCms_AssetUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_AssetUpdateManyInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations: Maybe<GraphCms_AssetUpdateManyLocalizationsInput>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetUpdateManyLocalizationDataInput = {
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  mimeType: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Float']>;
  width: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetUpdateManyLocalizationInput = {
  data: GraphCms_AssetUpdateManyLocalizationDataInput;
  locale: GraphCms_Locale;
};

export type GraphCms_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update: Maybe<Array<GraphCms_AssetUpdateManyLocalizationInput>>;
};

export type GraphCms_AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_AssetUpdateManyInput;
  /** Document search */
  where: GraphCms_AssetWhereInput;
};

export type GraphCms_AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect: Maybe<GraphCms_AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create: Maybe<GraphCms_AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update: Maybe<GraphCms_AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert: Maybe<GraphCms_AssetUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_AssetUpdateInput;
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput;
};

export type GraphCms_AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_AssetCreateInput;
  /** Update document if it exists */
  update: GraphCms_AssetUpdateInput;
};

export type GraphCms_AssetUpsertLocalizationInput = {
  create: GraphCms_AssetCreateLocalizationDataInput;
  locale: GraphCms_Locale;
  update: GraphCms_AssetUpdateLocalizationDataInput;
};

export type GraphCms_AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_AssetUpsertInput;
  /** Unique document search */
  where: GraphCms_AssetWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  authorAvatar_every: Maybe<GraphCms_AuthorWhereInput>;
  authorAvatar_none: Maybe<GraphCms_AuthorWhereInput>;
  authorAvatar_some: Maybe<GraphCms_AuthorWhereInput>;
  coverImagePost_every: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_none: Maybe<GraphCms_PostWhereInput>;
  coverImagePost_some: Maybe<GraphCms_PostWhereInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  fileName: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in: Maybe<Array<Scalars['Float']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  imageProduct_every: Maybe<GraphCms_ProductWhereInput>;
  imageProduct_none: Maybe<GraphCms_ProductWhereInput>;
  imageProduct_some: Maybe<GraphCms_ProductWhereInput>;
  mimeType: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seoImage_every: Maybe<GraphCms_SeoWhereInput>;
  seoImage_none: Maybe<GraphCms_SeoWhereInput>;
  seoImage_some: Maybe<GraphCms_SeoWhereInput>;
  size: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in: Maybe<Array<Scalars['Float']>>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
  width: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type GraphCms_AssetWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type GraphCms_Author = GraphCms_Node & {
  /** Enter a short bio about yourself, or other authors. */
  biography: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Author>;
  /** List of Author versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Enter the display name for authors */
  name: Scalars['String'];
  /** Add a profile picture for authors */
  picture: Maybe<GraphCms_Asset>;
  /** Connect blog posts to this author */
  posts: Array<GraphCms_Post>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** System stage field */
  stage: GraphCms_Stage;
  /** Enter the job title of the author */
  title: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
};


export type GraphCms_AuthorCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_AuthorHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_AuthorPictureArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_AuthorPostsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  locales: Maybe<Array<GraphCms_Locale>>;
  orderBy: Maybe<GraphCms_PostOrderByInput>;
  skip: Maybe<Scalars['Int']>;
  where: Maybe<GraphCms_PostWhereInput>;
};


export type GraphCms_AuthorPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_AuthorUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_AuthorWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_AuthorConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_AuthorEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_AuthorCreateInput = {
  biography: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  name: Scalars['String'];
  picture: Maybe<GraphCms_AssetCreateOneInlineInput>;
  posts: Maybe<GraphCms_PostCreateManyInlineInput>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  /** Create and connect multiple existing Author documents */
  create: Maybe<Array<GraphCms_AuthorCreateInput>>;
};

export type GraphCms_AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect: Maybe<GraphCms_AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create: Maybe<GraphCms_AuthorCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_AuthorEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Author;
};

/** Identifies documents */
export type GraphCms_AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  biography: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  biography_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  biography_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<GraphCms_AssetWhereInput>;
  posts_every: Maybe<GraphCms_PostWhereInput>;
  posts_none: Maybe<GraphCms_PostWhereInput>;
  posts_some: Maybe<GraphCms_PostWhereInput>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_AuthorOrderByInput {
  BiographyAsc = 'biography_ASC',
  BiographyDesc = 'biography_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GraphCms_AuthorUpdateInput = {
  biography: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  picture: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  posts: Maybe<GraphCms_PostUpdateManyInlineInput>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect: Maybe<Array<GraphCms_AuthorConnectInput>>;
  /** Create and connect multiple Author documents */
  create: Maybe<Array<GraphCms_AuthorCreateInput>>;
  /** Delete multiple Author documents */
  delete: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  /** Disconnect multiple Author documents */
  disconnect: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Author documents */
  set: Maybe<Array<GraphCms_AuthorWhereUniqueInput>>;
  /** Update multiple Author documents */
  update: Maybe<Array<GraphCms_AuthorUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Author documents */
  upsert: Maybe<Array<GraphCms_AuthorUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_AuthorUpdateManyInput = {
  biography: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_AuthorUpdateManyInput;
  /** Document search */
  where: GraphCms_AuthorWhereInput;
};

export type GraphCms_AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect: Maybe<GraphCms_AuthorWhereUniqueInput>;
  /** Create and connect one Author document */
  create: Maybe<GraphCms_AuthorCreateInput>;
  /** Delete currently connected Author document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Author document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Author document */
  update: Maybe<GraphCms_AuthorUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Author document */
  upsert: Maybe<GraphCms_AuthorUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_AuthorUpdateInput;
  /** Unique document search */
  where: GraphCms_AuthorWhereUniqueInput;
};

export type GraphCms_AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_AuthorCreateInput;
  /** Update document if it exists */
  update: GraphCms_AuthorUpdateInput;
};

export type GraphCms_AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_AuthorUpsertInput;
  /** Unique document search */
  where: GraphCms_AuthorWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_AuthorWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  biography: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  biography_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  biography_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  biography_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  biography_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  biography_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  biography_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  biography_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  biography_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  biography_starts_with: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<GraphCms_AssetWhereInput>;
  posts_every: Maybe<GraphCms_PostWhereInput>;
  posts_none: Maybe<GraphCms_PostWhereInput>;
  posts_some: Maybe<GraphCms_PostWhereInput>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

/** References Author record uniquely */
export type GraphCms_AuthorWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type GraphCms_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['GraphCMS_Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type GraphCms_Color = {
  css: Scalars['String'];
  hex: Scalars['GraphCMS_Hex'];
  rgba: GraphCms_Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type GraphCms_ColorInput = {
  hex: Maybe<Scalars['GraphCMS_Hex']>;
  rgba: Maybe<GraphCms_RgbaInput>;
};

export type GraphCms_ConnectPositionInput = {
  /** Connect document after specified document */
  after: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start: Maybe<Scalars['Boolean']>;
};



export enum GraphCms_DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type GraphCms_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:    jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:    docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:    doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:    doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:    jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:    jpg, pdf, ods, png, svg, xls, and webp
   * ODS:    jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:    jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:    jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:    jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:        jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:    jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:    jpg, odp, ods, odt, pdf, png, and webp
   * HTML:    jpg, odt, pdf, svg, txt, and webp
   * TXT:    jpg, html, odt, pdf, svg, and webp
   */
  format: Maybe<GraphCms_DocumentFileTypes>;
};

/** Transformations for Documents */
export type GraphCms_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output: Maybe<GraphCms_DocumentOutputInput>;
};

export type GraphCms_DocumentVersion = {
  createdAt: Scalars['GraphCMS_DateTime'];
  data: Maybe<Scalars['GraphCMS_Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: GraphCms_Stage;
};


export enum GraphCms_ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type GraphCms_ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit: Maybe<GraphCms_ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type GraphCms_ImageTransformationInput = {
  /** Resizes the image */
  resize: Maybe<GraphCms_ImageResizeInput>;
};


/** Locale system enumeration */
export enum GraphCms_Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type GraphCms_Location = {
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type GraphCms_LocationDistanceArgs = {
  from: GraphCms_LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type GraphCms_LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type GraphCms_Member = GraphCms_Node & {
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Member>;
  githubAccount: Maybe<Scalars['String']>;
  /** List of Member versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** System stage field */
  stage: GraphCms_Stage;
  technicalFields: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
};


export type GraphCms_MemberCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_MemberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_MemberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_MemberPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_MemberUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_MemberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_MemberWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_MemberConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_MemberEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_MemberCreateInput = {
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  description: Maybe<Scalars['String']>;
  githubAccount: Maybe<Scalars['String']>;
  name: Scalars['String'];
  technicalFields: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_MemberCreateManyInlineInput = {
  /** Connect multiple existing Member documents */
  connect: Maybe<Array<GraphCms_MemberWhereUniqueInput>>;
  /** Create and connect multiple existing Member documents */
  create: Maybe<Array<GraphCms_MemberCreateInput>>;
};

export type GraphCms_MemberCreateOneInlineInput = {
  /** Connect one existing Member document */
  connect: Maybe<GraphCms_MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create: Maybe<GraphCms_MemberCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_MemberEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Member;
};

/** Identifies documents */
export type GraphCms_MemberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than the given value. */
  birthday_gt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than or equal the given value. */
  birthday_gte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are contained in given list. */
  birthday_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  /** All values less than the given value. */
  birthday_lt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values less than or equal the given value. */
  birthday_lte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not equal to given value. */
  birthday_not: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not contained in given list. */
  birthday_not_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  githubAccount: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  githubAccount_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubAccount_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubAccount_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  githubAccount_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubAccount_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubAccount_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubAccount_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  githubAccount_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubAccount_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  technicalFields: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  technicalFields_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  technicalFields_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  technicalFields_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  technicalFields_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  technicalFields_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  technicalFields_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  technicalFields_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  technicalFields_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  technicalFields_starts_with: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterAccount_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterAccount_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterAccount_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  twitterAccount_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterAccount_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterAccount_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterAccount_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  twitterAccount_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterAccount_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_MemberOrderByInput {
  BirthdayAsc = 'birthday_ASC',
  BirthdayDesc = 'birthday_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GithubAccountAsc = 'githubAccount_ASC',
  GithubAccountDesc = 'githubAccount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TechnicalFieldsAsc = 'technicalFields_ASC',
  TechnicalFieldsDesc = 'technicalFields_DESC',
  TwitterAccountAsc = 'twitterAccount_ASC',
  TwitterAccountDesc = 'twitterAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GraphCms_MemberUpdateInput = {
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  description: Maybe<Scalars['String']>;
  githubAccount: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  technicalFields: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
};

export type GraphCms_MemberUpdateManyInlineInput = {
  /** Connect multiple existing Member documents */
  connect: Maybe<Array<GraphCms_MemberConnectInput>>;
  /** Create and connect multiple Member documents */
  create: Maybe<Array<GraphCms_MemberCreateInput>>;
  /** Delete multiple Member documents */
  delete: Maybe<Array<GraphCms_MemberWhereUniqueInput>>;
  /** Disconnect multiple Member documents */
  disconnect: Maybe<Array<GraphCms_MemberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Member documents */
  set: Maybe<Array<GraphCms_MemberWhereUniqueInput>>;
  /** Update multiple Member documents */
  update: Maybe<Array<GraphCms_MemberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Member documents */
  upsert: Maybe<Array<GraphCms_MemberUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_MemberUpdateManyInput = {
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  description: Maybe<Scalars['String']>;
  githubAccount: Maybe<Scalars['String']>;
  technicalFields: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
};

export type GraphCms_MemberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_MemberUpdateManyInput;
  /** Document search */
  where: GraphCms_MemberWhereInput;
};

export type GraphCms_MemberUpdateOneInlineInput = {
  /** Connect existing Member document */
  connect: Maybe<GraphCms_MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create: Maybe<GraphCms_MemberCreateInput>;
  /** Delete currently connected Member document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Member document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Member document */
  update: Maybe<GraphCms_MemberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Member document */
  upsert: Maybe<GraphCms_MemberUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_MemberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_MemberUpdateInput;
  /** Unique document search */
  where: GraphCms_MemberWhereUniqueInput;
};

export type GraphCms_MemberUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_MemberCreateInput;
  /** Update document if it exists */
  update: GraphCms_MemberUpdateInput;
};

export type GraphCms_MemberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_MemberUpsertInput;
  /** Unique document search */
  where: GraphCms_MemberWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_MemberWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  birthday: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than the given value. */
  birthday_gt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than or equal the given value. */
  birthday_gte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are contained in given list. */
  birthday_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  /** All values less than the given value. */
  birthday_lt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values less than or equal the given value. */
  birthday_lte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not equal to given value. */
  birthday_not: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not contained in given list. */
  birthday_not_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  githubAccount: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  githubAccount_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  githubAccount_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  githubAccount_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  githubAccount_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  githubAccount_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  githubAccount_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  githubAccount_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  githubAccount_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  githubAccount_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  technicalFields: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  technicalFields_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  technicalFields_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  technicalFields_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  technicalFields_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  technicalFields_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  technicalFields_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  technicalFields_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  technicalFields_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  technicalFields_starts_with: Maybe<Scalars['String']>;
  twitterAccount: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  twitterAccount_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  twitterAccount_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  twitterAccount_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  twitterAccount_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  twitterAccount_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  twitterAccount_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  twitterAccount_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  twitterAccount_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  twitterAccount_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

/** References Member record uniquely */
export type GraphCms_MemberWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type GraphCms_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: GraphCms_Stage;
};

export type GraphCms_Page = GraphCms_Node & {
  /** Enter the content for this page. The content uses the rich-text editor, giving you a better visual representation. */
  content: GraphCms_RichText;
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Page>;
  /** List of Page versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** Relate an SEO model to this page */
  seo: Maybe<GraphCms_Seo>;
  /** Enter the slug for this page, such as about, blog, or contact */
  slug: Scalars['String'];
  /** System stage field */
  stage: GraphCms_Stage;
  /** Enter a short description to be used as a subtitle */
  subtitle: Maybe<Scalars['String']>;
  /** What is the title of your page? */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
};


export type GraphCms_PageCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_PagePublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PageSeoArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PageUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_PageConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_PageCreateInput = {
  content: Scalars['GraphCMS_RichTextAST'];
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  seo: Maybe<GraphCms_SeoCreateOneInlineInput>;
  slug: Scalars['String'];
  subtitle: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect: Maybe<Array<GraphCms_PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create: Maybe<Array<GraphCms_PageCreateInput>>;
};

export type GraphCms_PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect: Maybe<GraphCms_PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create: Maybe<GraphCms_PageCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_PageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Page;
};

/** Information about pagination in a connection. */
export type GraphCms_PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type GraphCms_PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seo: Maybe<GraphCms_SeoWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GraphCms_PageUpdateInput = {
  content: Maybe<Scalars['GraphCMS_RichTextAST']>;
  seo: Maybe<GraphCms_SeoUpdateOneInlineInput>;
  slug: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect: Maybe<Array<GraphCms_PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create: Maybe<Array<GraphCms_PageCreateInput>>;
  /** Delete multiple Page documents */
  delete: Maybe<Array<GraphCms_PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect: Maybe<Array<GraphCms_PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set: Maybe<Array<GraphCms_PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update: Maybe<Array<GraphCms_PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert: Maybe<Array<GraphCms_PageUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_PageUpdateManyInput = {
  content: Maybe<Scalars['GraphCMS_RichTextAST']>;
  subtitle: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_PageUpdateManyInput;
  /** Document search */
  where: GraphCms_PageWhereInput;
};

export type GraphCms_PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect: Maybe<GraphCms_PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create: Maybe<GraphCms_PageCreateInput>;
  /** Delete currently connected Page document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Page document */
  update: Maybe<GraphCms_PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert: Maybe<GraphCms_PageUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_PageUpdateInput;
  /** Unique document search */
  where: GraphCms_PageWhereUniqueInput;
};

export type GraphCms_PageUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PageCreateInput;
  /** Update document if it exists */
  update: GraphCms_PageUpdateInput;
};

export type GraphCms_PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_PageUpsertInput;
  /** Unique document search */
  where: GraphCms_PageWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_PageWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seo: Maybe<GraphCms_SeoWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subtitle_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subtitle_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subtitle_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subtitle_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subtitle_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subtitle_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subtitle_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subtitle_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subtitle_starts_with: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

/** References Page record uniquely */
export type GraphCms_PageWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type GraphCms_Post = GraphCms_Node & {
  /** Who should be credited with writing this post? */
  author: Maybe<GraphCms_Author>;
  /** Write your blog post! */
  content: GraphCms_RichText;
  /** Upload or select a cover image to set as your Featured Image */
  coverImage: Maybe<GraphCms_Asset>;
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  /** What is the published date you would like to show for this post? */
  date: Scalars['GraphCMS_Date'];
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Post>;
  /** Add a short excerpt to summarize this post */
  excerpt: Maybe<Scalars['String']>;
  /** List of Post versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** Attach an SEO model to this post */
  seo: Maybe<GraphCms_Seo>;
  /** Select a slug for this blog post, such as post-1, post-2, etc. */
  slug: Scalars['String'];
  /** System stage field */
  stage: GraphCms_Stage;
  /** Add any relevant tags to this blog post */
  tags: Array<Scalars['String']>;
  /** Name your blog post! */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
};


export type GraphCms_PostAuthorArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PostCoverImageArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PostCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_PostHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_PostPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PostSeoArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_PostUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_PostWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_PostConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_PostEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_PostCreateInput = {
  author: Maybe<GraphCms_AuthorCreateOneInlineInput>;
  content: Scalars['GraphCMS_RichTextAST'];
  coverImage: Maybe<GraphCms_AssetCreateOneInlineInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  date: Scalars['GraphCMS_Date'];
  excerpt: Maybe<Scalars['String']>;
  seo: Maybe<GraphCms_SeoCreateOneInlineInput>;
  slug: Scalars['String'];
  tags: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  /** Create and connect multiple existing Post documents */
  create: Maybe<Array<GraphCms_PostCreateInput>>;
};

export type GraphCms_PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect: Maybe<GraphCms_PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create: Maybe<GraphCms_PostCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_PostEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Post;
};

/** Identifies documents */
export type GraphCms_PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  author: Maybe<GraphCms_AuthorWhereInput>;
  coverImage: Maybe<GraphCms_AssetWhereInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  date: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than the given value. */
  date_gt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than or equal the given value. */
  date_gte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are contained in given list. */
  date_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  /** All values less than the given value. */
  date_lt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values less than or equal the given value. */
  date_lte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not equal to given value. */
  date_not: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not contained in given list. */
  date_not_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  excerpt: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  excerpt_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seo: Maybe<GraphCms_SeoWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not: Maybe<Array<Scalars['String']>>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_PostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GraphCms_PostUpdateInput = {
  author: Maybe<GraphCms_AuthorUpdateOneInlineInput>;
  content: Maybe<Scalars['GraphCMS_RichTextAST']>;
  coverImage: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  date: Maybe<Scalars['GraphCMS_Date']>;
  excerpt: Maybe<Scalars['String']>;
  seo: Maybe<GraphCms_SeoUpdateOneInlineInput>;
  slug: Maybe<Scalars['String']>;
  tags: Maybe<Array<Scalars['String']>>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect: Maybe<Array<GraphCms_PostConnectInput>>;
  /** Create and connect multiple Post documents */
  create: Maybe<Array<GraphCms_PostCreateInput>>;
  /** Delete multiple Post documents */
  delete: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  /** Disconnect multiple Post documents */
  disconnect: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Post documents */
  set: Maybe<Array<GraphCms_PostWhereUniqueInput>>;
  /** Update multiple Post documents */
  update: Maybe<Array<GraphCms_PostUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Post documents */
  upsert: Maybe<Array<GraphCms_PostUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_PostUpdateManyInput = {
  content: Maybe<Scalars['GraphCMS_RichTextAST']>;
  date: Maybe<Scalars['GraphCMS_Date']>;
  excerpt: Maybe<Scalars['String']>;
  tags: Maybe<Array<Scalars['String']>>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_PostUpdateManyInput;
  /** Document search */
  where: GraphCms_PostWhereInput;
};

export type GraphCms_PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect: Maybe<GraphCms_PostWhereUniqueInput>;
  /** Create and connect one Post document */
  create: Maybe<GraphCms_PostCreateInput>;
  /** Delete currently connected Post document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Post document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Post document */
  update: Maybe<GraphCms_PostUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Post document */
  upsert: Maybe<GraphCms_PostUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_PostUpdateInput;
  /** Unique document search */
  where: GraphCms_PostWhereUniqueInput;
};

export type GraphCms_PostUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_PostCreateInput;
  /** Update document if it exists */
  update: GraphCms_PostUpdateInput;
};

export type GraphCms_PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_PostUpsertInput;
  /** Unique document search */
  where: GraphCms_PostWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_PostWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_PostWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  author: Maybe<GraphCms_AuthorWhereInput>;
  coverImage: Maybe<GraphCms_AssetWhereInput>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  date: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than the given value. */
  date_gt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values greater than or equal the given value. */
  date_gte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are contained in given list. */
  date_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  /** All values less than the given value. */
  date_lt: Maybe<Scalars['GraphCMS_Date']>;
  /** All values less than or equal the given value. */
  date_lte: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not equal to given value. */
  date_not: Maybe<Scalars['GraphCMS_Date']>;
  /** All values that are not contained in given list. */
  date_not_in: Maybe<Array<Scalars['GraphCMS_Date']>>;
  excerpt: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  excerpt_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  excerpt_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  excerpt_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  seo: Maybe<GraphCms_SeoWhereInput>;
  slug: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  tags: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  tags_contains_all: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  tags_contains_none: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  tags_contains_some: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  tags_not: Maybe<Array<Scalars['String']>>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

/** References Post record uniquely */
export type GraphCms_PostWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type GraphCms_Product = GraphCms_Node & {
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Product>;
  /** List of Product versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Maybe<GraphCms_Asset>;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** System stage field */
  stage: GraphCms_Stage;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
  url: Maybe<Scalars['String']>;
};


export type GraphCms_ProductCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_ProductImageArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_ProductPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_ProductUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_ProductConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_ProductCreateInput = {
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  description: Maybe<Scalars['String']>;
  image: Maybe<GraphCms_AssetCreateOneInlineInput>;
  name: Scalars['String'];
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  url: Maybe<Scalars['String']>;
};

export type GraphCms_ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: Maybe<Array<GraphCms_ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create: Maybe<Array<GraphCms_ProductCreateInput>>;
};

export type GraphCms_ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect: Maybe<GraphCms_ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: Maybe<GraphCms_ProductCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Product;
};

/** Identifies documents */
export type GraphCms_ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  image: Maybe<GraphCms_AssetWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
  url: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with: Maybe<Scalars['String']>;
};

export enum GraphCms_ProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type GraphCms_ProductUpdateInput = {
  description: Maybe<Scalars['String']>;
  image: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type GraphCms_ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect: Maybe<Array<GraphCms_ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create: Maybe<Array<GraphCms_ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete: Maybe<Array<GraphCms_ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect: Maybe<Array<GraphCms_ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set: Maybe<Array<GraphCms_ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update: Maybe<Array<GraphCms_ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert: Maybe<Array<GraphCms_ProductUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_ProductUpdateManyInput = {
  description: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type GraphCms_ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_ProductUpdateManyInput;
  /** Document search */
  where: GraphCms_ProductWhereInput;
};

export type GraphCms_ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect: Maybe<GraphCms_ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create: Maybe<GraphCms_ProductCreateInput>;
  /** Delete currently connected Product document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Product document */
  update: Maybe<GraphCms_ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert: Maybe<GraphCms_ProductUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_ProductUpdateInput;
  /** Unique document search */
  where: GraphCms_ProductWhereUniqueInput;
};

export type GraphCms_ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_ProductCreateInput;
  /** Update document if it exists */
  update: GraphCms_ProductUpdateInput;
};

export type GraphCms_ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_ProductUpsertInput;
  /** Unique document search */
  where: GraphCms_ProductWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  image: Maybe<GraphCms_AssetWhereInput>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
  url: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  url_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  url_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  url_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with: Maybe<Scalars['String']>;
};

/** References Product record uniquely */
export type GraphCms_ProductWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type GraphCms_PublishLocaleInput = {
  /** Locales to publish */
  locale: GraphCms_Locale;
  /** Stages to publish selected locales to */
  stages: Array<GraphCms_Stage>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_Rgba = {
  a: Scalars['GraphCMS_RGBATransparency'];
  b: Scalars['GraphCMS_RGBAHue'];
  g: Scalars['GraphCMS_RGBAHue'];
  r: Scalars['GraphCMS_RGBAHue'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GraphCms_RgbaInput = {
  a: Scalars['GraphCMS_RGBATransparency'];
  b: Scalars['GraphCMS_RGBAHue'];
  g: Scalars['GraphCMS_RGBAHue'];
  r: Scalars['GraphCMS_RGBAHue'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type GraphCms_RichText = {
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['GraphCMS_RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


export type GraphCms_Seo = GraphCms_Node & {
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** User that created this document */
  createdBy: Maybe<GraphCms_User>;
  /** Create a custom meta description */
  description: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_Seo>;
  /** List of Seo versions */
  history: Array<GraphCms_Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Select a custom OG image (the most common size is usually 1280x720) */
  image: Maybe<GraphCms_Asset>;
  /** Select your focus keywords */
  keywords: Array<Scalars['String']>;
  /** What pages and blog posts would this SEO apply to? */
  parent: Maybe<GraphCms_SeoParent>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** User that last published this document */
  publishedBy: Maybe<GraphCms_User>;
  /** System stage field */
  stage: GraphCms_Stage;
  /** Create a custom meta title */
  title: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
  /** User that last updated this document */
  updatedBy: Maybe<GraphCms_User>;
};


export type GraphCms_SeoCreatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_SeoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};


export type GraphCms_SeoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride: Maybe<GraphCms_Stage>;
};


export type GraphCms_SeoImageArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_SeoParentArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_SeoPublishedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};


export type GraphCms_SeoUpdatedByArgs = {
  locales: Maybe<Array<GraphCms_Locale>>;
};

export type GraphCms_SeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position: Maybe<GraphCms_ConnectPositionInput>;
  /** Document to connect */
  where: GraphCms_SeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type GraphCms_SeoConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_SeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

export type GraphCms_SeoCreateInput = {
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  description: Maybe<Scalars['String']>;
  image: Maybe<GraphCms_AssetCreateOneInlineInput>;
  keywords: Maybe<Array<Scalars['String']>>;
  parent: Maybe<GraphCms_SeoParentCreateOneInlineInput>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
};

export type GraphCms_SeoCreateManyInlineInput = {
  /** Connect multiple existing Seo documents */
  connect: Maybe<Array<GraphCms_SeoWhereUniqueInput>>;
  /** Create and connect multiple existing Seo documents */
  create: Maybe<Array<GraphCms_SeoCreateInput>>;
};

export type GraphCms_SeoCreateOneInlineInput = {
  /** Connect one existing Seo document */
  connect: Maybe<GraphCms_SeoWhereUniqueInput>;
  /** Create and connect one Seo document */
  create: Maybe<GraphCms_SeoCreateInput>;
};

/** An edge in a connection. */
export type GraphCms_SeoEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_Seo;
};

/** Identifies documents */
export type GraphCms_SeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  image: Maybe<GraphCms_AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not: Maybe<Array<Scalars['String']>>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

export enum GraphCms_SeoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeywordsAsc = 'keywords_ASC',
  KeywordsDesc = 'keywords_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GraphCms_SeoParent = GraphCms_Page | GraphCms_Post;

export type GraphCms_SeoParentConnectInput = {
  Page: Maybe<GraphCms_PageConnectInput>;
  Post: Maybe<GraphCms_PostConnectInput>;
};

export type GraphCms_SeoParentCreateInput = {
  Page: Maybe<GraphCms_PageCreateInput>;
  Post: Maybe<GraphCms_PostCreateInput>;
};

export type GraphCms_SeoParentCreateManyInlineInput = {
  /** Connect multiple existing SeoParent documents */
  connect: Maybe<Array<GraphCms_SeoParentWhereUniqueInput>>;
  /** Create and connect multiple existing SeoParent documents */
  create: Maybe<Array<GraphCms_SeoParentCreateInput>>;
};

export type GraphCms_SeoParentCreateOneInlineInput = {
  /** Connect one existing SeoParent document */
  connect: Maybe<GraphCms_SeoParentWhereUniqueInput>;
  /** Create and connect one SeoParent document */
  create: Maybe<GraphCms_SeoParentCreateInput>;
};

export type GraphCms_SeoParentUpdateInput = {
  Page: Maybe<GraphCms_PageUpdateInput>;
  Post: Maybe<GraphCms_PostUpdateInput>;
};

export type GraphCms_SeoParentUpdateManyInlineInput = {
  /** Connect multiple existing SeoParent documents */
  connect: Maybe<Array<GraphCms_SeoParentConnectInput>>;
  /** Create and connect multiple SeoParent documents */
  create: Maybe<Array<GraphCms_SeoParentCreateInput>>;
  /** Delete multiple SeoParent documents */
  delete: Maybe<Array<GraphCms_SeoParentWhereUniqueInput>>;
  /** Disconnect multiple SeoParent documents */
  disconnect: Maybe<Array<GraphCms_SeoParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SeoParent documents */
  set: Maybe<Array<GraphCms_SeoParentWhereUniqueInput>>;
  /** Update multiple SeoParent documents */
  update: Maybe<Array<GraphCms_SeoParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SeoParent documents */
  upsert: Maybe<Array<GraphCms_SeoParentUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_SeoParentUpdateManyWithNestedWhereInput = {
  Page: Maybe<GraphCms_PageUpdateManyWithNestedWhereInput>;
  Post: Maybe<GraphCms_PostUpdateManyWithNestedWhereInput>;
};

export type GraphCms_SeoParentUpdateOneInlineInput = {
  /** Connect existing SeoParent document */
  connect: Maybe<GraphCms_SeoParentWhereUniqueInput>;
  /** Create and connect one SeoParent document */
  create: Maybe<GraphCms_SeoParentCreateInput>;
  /** Delete currently connected SeoParent document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected SeoParent document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single SeoParent document */
  update: Maybe<GraphCms_SeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SeoParent document */
  upsert: Maybe<GraphCms_SeoParentUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_SeoParentUpdateWithNestedWhereUniqueInput = {
  Page: Maybe<GraphCms_PageUpdateWithNestedWhereUniqueInput>;
  Post: Maybe<GraphCms_PostUpdateWithNestedWhereUniqueInput>;
};

export type GraphCms_SeoParentUpsertWithNestedWhereUniqueInput = {
  Page: Maybe<GraphCms_PageUpsertWithNestedWhereUniqueInput>;
  Post: Maybe<GraphCms_PostUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_SeoParentWhereInput = {
  Page: Maybe<GraphCms_PageWhereInput>;
  Post: Maybe<GraphCms_PostWhereInput>;
};

export type GraphCms_SeoParentWhereUniqueInput = {
  Page: Maybe<GraphCms_PageWhereUniqueInput>;
  Post: Maybe<GraphCms_PostWhereUniqueInput>;
};

export type GraphCms_SeoUpdateInput = {
  description: Maybe<Scalars['String']>;
  image: Maybe<GraphCms_AssetUpdateOneInlineInput>;
  keywords: Maybe<Array<Scalars['String']>>;
  parent: Maybe<GraphCms_SeoParentUpdateOneInlineInput>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_SeoUpdateManyInlineInput = {
  /** Connect multiple existing Seo documents */
  connect: Maybe<Array<GraphCms_SeoConnectInput>>;
  /** Create and connect multiple Seo documents */
  create: Maybe<Array<GraphCms_SeoCreateInput>>;
  /** Delete multiple Seo documents */
  delete: Maybe<Array<GraphCms_SeoWhereUniqueInput>>;
  /** Disconnect multiple Seo documents */
  disconnect: Maybe<Array<GraphCms_SeoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Seo documents */
  set: Maybe<Array<GraphCms_SeoWhereUniqueInput>>;
  /** Update multiple Seo documents */
  update: Maybe<Array<GraphCms_SeoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Seo documents */
  upsert: Maybe<Array<GraphCms_SeoUpsertWithNestedWhereUniqueInput>>;
};

export type GraphCms_SeoUpdateManyInput = {
  description: Maybe<Scalars['String']>;
  keywords: Maybe<Array<Scalars['String']>>;
  title: Maybe<Scalars['String']>;
};

export type GraphCms_SeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GraphCms_SeoUpdateManyInput;
  /** Document search */
  where: GraphCms_SeoWhereInput;
};

export type GraphCms_SeoUpdateOneInlineInput = {
  /** Connect existing Seo document */
  connect: Maybe<GraphCms_SeoWhereUniqueInput>;
  /** Create and connect one Seo document */
  create: Maybe<GraphCms_SeoCreateInput>;
  /** Delete currently connected Seo document */
  delete: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Seo document */
  disconnect: Maybe<Scalars['Boolean']>;
  /** Update single Seo document */
  update: Maybe<GraphCms_SeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Seo document */
  upsert: Maybe<GraphCms_SeoUpsertWithNestedWhereUniqueInput>;
};

export type GraphCms_SeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GraphCms_SeoUpdateInput;
  /** Unique document search */
  where: GraphCms_SeoWhereUniqueInput;
};

export type GraphCms_SeoUpsertInput = {
  /** Create document if it didn't exist */
  create: GraphCms_SeoCreateInput;
  /** Update document if it exists */
  update: GraphCms_SeoUpdateInput;
};

export type GraphCms_SeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GraphCms_SeoUpsertInput;
  /** Unique document search */
  where: GraphCms_SeoWhereUniqueInput;
};

/** Identifies documents */
export type GraphCms_SeoWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_SeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  createdBy: Maybe<GraphCms_UserWhereInput>;
  description: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  image: Maybe<GraphCms_AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  keywords: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  keywords_contains_all: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  keywords_contains_none: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  keywords_contains_some: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  keywords_not: Maybe<Array<Scalars['String']>>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  publishedBy: Maybe<GraphCms_UserWhereInput>;
  title: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedBy: Maybe<GraphCms_UserWhereInput>;
};

/** References Seo record uniquely */
export type GraphCms_SeoWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum GraphCms_Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum GraphCms_SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type GraphCms_UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: GraphCms_Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<GraphCms_Stage>;
};

/** User system model */
export type GraphCms_User = GraphCms_Node & {
  /** The time the document was created */
  createdAt: Scalars['GraphCMS_DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<GraphCms_User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: GraphCms_UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** System stage field */
  stage: GraphCms_Stage;
  /** The time the document was updated */
  updatedAt: Scalars['GraphCMS_DateTime'];
};


/** User system model */
export type GraphCms_UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<GraphCms_Stage>;
};

/** A connection to a list of items. */
export type GraphCms_UserConnection = {
  aggregate: GraphCms_Aggregate;
  /** A list of edges. */
  edges: Array<GraphCms_UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: GraphCms_PageInfo;
};

/** An edge in a connection. */
export type GraphCms_UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: GraphCms_User;
};

/** System User Kind */
export enum GraphCms_UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type GraphCms_UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  kind: Maybe<GraphCms_UserKind>;
  /** All values that are contained in given list. */
  kind_in: Maybe<Array<GraphCms_UserKind>>;
  /** All values that are not equal to given value. */
  kind_not: Maybe<GraphCms_UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: Maybe<Array<GraphCms_UserKind>>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
};

export enum GraphCms_UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Identifies documents */
export type GraphCms_UserWhereInput = {
  /** Logical AND on all given filters. */
  AND: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR: Maybe<Array<GraphCms_UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  id: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with: Maybe<Scalars['ID']>;
  isActive: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not: Maybe<Scalars['Boolean']>;
  kind: Maybe<GraphCms_UserKind>;
  /** All values that are contained in given list. */
  kind_in: Maybe<Array<GraphCms_UserKind>>;
  /** All values that are not equal to given value. */
  kind_not: Maybe<GraphCms_UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in: Maybe<Array<GraphCms_UserKind>>;
  name: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  updatedAt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not: Maybe<Scalars['GraphCMS_DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in: Maybe<Array<Scalars['GraphCMS_DateTime']>>;
};

/** References User record uniquely */
export type GraphCms_UserWhereUniqueInput = {
  id: Maybe<Scalars['ID']>;
};

export type GraphCms_Version = {
  createdAt: Scalars['GraphCMS_DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: GraphCms_Stage;
};

export type GraphCms_VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: GraphCms_Stage;
};

export enum GraphCms__FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum GraphCms__MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum GraphCms__MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum GraphCms__OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum GraphCms__RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum GraphCms__RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum GraphCms__RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum GraphCms__SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GraphQlSource = Node & {
  children: Array<Node>;
  fieldName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  typeName: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphQlSourceEdge>;
  group: Array<GraphQlSourceGroupConnection>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  field: GraphQlSourceFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphQlSourceEdge = {
  next: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous: Maybe<GraphQlSource>;
};

export enum GraphQlSourceFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FieldName = 'fieldName',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  TypeName = 'typeName'
}

export type GraphQlSourceFilterInput = {
  children: Maybe<NodeFilterListInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  edges: Array<GraphQlSourceEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphQlSourceSortInput = {
  fields: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  maxWidth: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: Maybe<Scalars['Float']>;
  avifOptions: Maybe<AvifOptions>;
  backgroundColor: Maybe<Scalars['String']>;
  blurredOptions: Maybe<BlurredOptions>;
  breakpoints: Maybe<Array<Maybe<Scalars['Int']>>>;
  formats: Maybe<Array<Maybe<ImageFormat>>>;
  height: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JpgOptions>;
  layout?: Maybe<ImageLayout>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder: Maybe<ImagePlaceholder>;
  pngOptions: Maybe<PngOptions>;
  quality: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  tracedSVGOptions: Maybe<Potrace>;
  transformOptions: Maybe<TransformOptions>;
  webpOptions: Maybe<WebPOptions>;
  width: Maybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: Maybe<Scalars['String']>;
  base64?: Maybe<Scalars['Boolean']>;
  cropFocus?: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit?: Maybe<ImageFit>;
  grayscale?: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  rotate?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  traceSVG: Maybe<Potrace>;
  trim?: Maybe<Scalars['Float']>;
  webpQuality: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children: Maybe<NodeFilterListInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  base64: Maybe<StringQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  base64: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageSharpOriginal = {
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: Maybe<Scalars['Boolean']>;
  quality: Maybe<Scalars['Int']>;
};


export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>;
  glob: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  ne: Maybe<Scalars['JSON']>;
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax: Maybe<Scalars['Float']>;
  background: Maybe<Scalars['String']>;
  blackOnWhite: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['String']>;
  optCurve: Maybe<Scalars['Boolean']>;
  optTolerance: Maybe<Scalars['Float']>;
  threshold: Maybe<Scalars['Int']>;
  turdSize: Maybe<Scalars['Float']>;
  turnPolicy: Maybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allGraphQlSource: GraphQlSourceConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allThemeUiConfig: ThemeUiConfigConnection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  gcms: GraphCms;
  graphQlSource: Maybe<GraphQlSource>;
  imageSharp: Maybe<ImageSharp>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
  themeUiConfig: Maybe<ThemeUiConfig>;
};


export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<FileSortInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter: Maybe<GraphQlSourceFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphQlSourceSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<ImageSharpSortInput>;
};


export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<SitePluginSortInput>;
};


export type QueryAllThemeUiConfigArgs = {
  filter: Maybe<ThemeUiConfigFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<ThemeUiConfigSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  children: Maybe<NodeFilterListInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};


export type QueryGraphQlSourceArgs = {
  children: Maybe<NodeFilterListInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children: Maybe<NodeFilterListInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
};


export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};


export type QuerySitePageArgs = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};


export type QueryThemeUiConfigArgs = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  preset: Maybe<JsonQueryOperatorInput>;
  prismPreset: Maybe<JsonQueryOperatorInput>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: Maybe<Scalars['String']>;
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitle = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteGroupConnection = {
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  componentPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  matchPath: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  MatchPath = 'matchPath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorId = 'pluginCreatorId',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<SitePluginPackageJson>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonMain = 'packageJson___main',
  PackageJsonName = 'packageJson___name',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonVersion = 'packageJson___version',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsPresetDefaultFontSizes = 'pluginOptions___preset___default___fontSizes',
  PluginOptionsPresetDefaultSpace = 'pluginOptions___preset___default___space',
  PluginOptionsPresetFunkFontSizes = 'pluginOptions___preset___funk___fontSizes',
  PluginOptionsPresetFunkSpace = 'pluginOptions___preset___funk___space',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsUrl = 'pluginOptions___url',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePluginPackageJson = {
  author: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description: Maybe<Scalars['String']>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
  license: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  author: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description: Maybe<StringQueryOperatorInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  allExtensions: Maybe<Scalars['Boolean']>;
  background_color: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  cacheDigest: Maybe<Scalars['String']>;
  cache_busting_mode: Maybe<Scalars['String']>;
  crossOrigin: Maybe<Scalars['String']>;
  defaultQuality: Maybe<Scalars['Int']>;
  display: Maybe<Scalars['String']>;
  failOnError: Maybe<Scalars['Boolean']>;
  fieldName: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  include_favicon: Maybe<Scalars['Boolean']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  legacy: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
  preset: Maybe<SitePluginPluginOptionsPreset>;
  short_name: Maybe<Scalars['String']>;
  start_url: Maybe<Scalars['String']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  theme_color: Maybe<Scalars['String']>;
  theme_color_in_head: Maybe<Scalars['Boolean']>;
  typeName: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  preset: Maybe<SitePluginPluginOptionsPresetFilterInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPreset = {
  default: Maybe<SitePluginPluginOptionsPresetDefault>;
  funk: Maybe<SitePluginPluginOptionsPresetFunk>;
};

export type SitePluginPluginOptionsPresetDefault = {
  colors: Maybe<SitePluginPluginOptionsPresetDefaultColors>;
  fontSizes: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights: Maybe<SitePluginPluginOptionsPresetDefaultFontWeights>;
  fonts: Maybe<SitePluginPluginOptionsPresetDefaultFonts>;
  lineHeights: Maybe<SitePluginPluginOptionsPresetDefaultLineHeights>;
  space: Maybe<Array<Maybe<Scalars['Int']>>>;
  styles: Maybe<SitePluginPluginOptionsPresetDefaultStyles>;
};

export type SitePluginPluginOptionsPresetDefaultColors = {
  background: Maybe<Scalars['String']>;
  muted: Maybe<Scalars['String']>;
  primary: Maybe<Scalars['String']>;
  secondary: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultColorsFilterInput = {
  background: Maybe<StringQueryOperatorInput>;
  muted: Maybe<StringQueryOperatorInput>;
  primary: Maybe<StringQueryOperatorInput>;
  secondary: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFilterInput = {
  colors: Maybe<SitePluginPluginOptionsPresetDefaultColorsFilterInput>;
  fontSizes: Maybe<IntQueryOperatorInput>;
  fontWeights: Maybe<SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput>;
  fonts: Maybe<SitePluginPluginOptionsPresetDefaultFontsFilterInput>;
  lineHeights: Maybe<SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput>;
  space: Maybe<IntQueryOperatorInput>;
  styles: Maybe<SitePluginPluginOptionsPresetDefaultStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeights = {
  body: Maybe<Scalars['Int']>;
  bold: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetDefaultFontWeightsFilterInput = {
  body: Maybe<IntQueryOperatorInput>;
  bold: Maybe<IntQueryOperatorInput>;
  heading: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultFonts = {
  body: Maybe<Scalars['String']>;
  heading: Maybe<Scalars['String']>;
  monospace: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultFontsFilterInput = {
  body: Maybe<StringQueryOperatorInput>;
  heading: Maybe<StringQueryOperatorInput>;
  monospace: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeights = {
  body: Maybe<Scalars['Float']>;
  heading: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetDefaultLineHeightsFilterInput = {
  body: Maybe<FloatQueryOperatorInput>;
  heading: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStyles = {
  a: Maybe<SitePluginPluginOptionsPresetDefaultStylesA>;
  code: Maybe<SitePluginPluginOptionsPresetDefaultStylesCode>;
  h1: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1>;
  h2: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2>;
  h3: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3>;
  h4: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4>;
  h5: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5>;
  h6: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6>;
  img: Maybe<SitePluginPluginOptionsPresetDefaultStylesImg>;
  p: Maybe<SitePluginPluginOptionsPresetDefaultStylesP>;
  pre: Maybe<SitePluginPluginOptionsPresetDefaultStylesPre>;
  root: Maybe<SitePluginPluginOptionsPresetDefaultStylesRoot>;
  table: Maybe<SitePluginPluginOptionsPresetDefaultStylesTable>;
  td: Maybe<SitePluginPluginOptionsPresetDefaultStylesTd>;
  th: Maybe<SitePluginPluginOptionsPresetDefaultStylesTh>;
};

export type SitePluginPluginOptionsPresetDefaultStylesA = {
  color: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesAFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCode = {
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput = {
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesFilterInput = {
  a: Maybe<SitePluginPluginOptionsPresetDefaultStylesAFilterInput>;
  code: Maybe<SitePluginPluginOptionsPresetDefaultStylesCodeFilterInput>;
  h1: Maybe<SitePluginPluginOptionsPresetDefaultStylesH1FilterInput>;
  h2: Maybe<SitePluginPluginOptionsPresetDefaultStylesH2FilterInput>;
  h3: Maybe<SitePluginPluginOptionsPresetDefaultStylesH3FilterInput>;
  h4: Maybe<SitePluginPluginOptionsPresetDefaultStylesH4FilterInput>;
  h5: Maybe<SitePluginPluginOptionsPresetDefaultStylesH5FilterInput>;
  h6: Maybe<SitePluginPluginOptionsPresetDefaultStylesH6FilterInput>;
  img: Maybe<SitePluginPluginOptionsPresetDefaultStylesImgFilterInput>;
  p: Maybe<SitePluginPluginOptionsPresetDefaultStylesPFilterInput>;
  pre: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreFilterInput>;
  root: Maybe<SitePluginPluginOptionsPresetDefaultStylesRootFilterInput>;
  table: Maybe<SitePluginPluginOptionsPresetDefaultStylesTableFilterInput>;
  td: Maybe<SitePluginPluginOptionsPresetDefaultStylesTdFilterInput>;
  th: Maybe<SitePluginPluginOptionsPresetDefaultStylesThFilterInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH1FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH2FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH3FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH4FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH5FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesH6FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImg = {
  maxWidth: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesImgFilterInput = {
  maxWidth: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesP = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPre = {
  code: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCode>;
  fontFamily: Maybe<Scalars['String']>;
  overflowX: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCode = {
  color: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesPreFilterInput = {
  code: Maybe<SitePluginPluginOptionsPresetDefaultStylesPreCodeFilterInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  overflowX: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRoot = {
  fontFamily: Maybe<Scalars['String']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesRootFilterInput = {
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTable = {
  borderCollapse: Maybe<Scalars['String']>;
  borderSpacing: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTableFilterInput = {
  borderCollapse: Maybe<StringQueryOperatorInput>;
  borderSpacing: Maybe<IntQueryOperatorInput>;
  width: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTd = {
  borderBottomStyle: Maybe<Scalars['String']>;
  textAlign: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTdFilterInput = {
  borderBottomStyle: Maybe<StringQueryOperatorInput>;
  textAlign: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetDefaultStylesTh = {
  borderBottomStyle: Maybe<Scalars['String']>;
  textAlign: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetDefaultStylesThFilterInput = {
  borderBottomStyle: Maybe<StringQueryOperatorInput>;
  textAlign: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFilterInput = {
  default: Maybe<SitePluginPluginOptionsPresetDefaultFilterInput>;
  funk: Maybe<SitePluginPluginOptionsPresetFunkFilterInput>;
};

export type SitePluginPluginOptionsPresetFunk = {
  colors: Maybe<SitePluginPluginOptionsPresetFunkColors>;
  fontSizes: Maybe<Array<Maybe<Scalars['Int']>>>;
  fontWeights: Maybe<SitePluginPluginOptionsPresetFunkFontWeights>;
  fonts: Maybe<SitePluginPluginOptionsPresetFunkFonts>;
  lineHeights: Maybe<SitePluginPluginOptionsPresetFunkLineHeights>;
  space: Maybe<Array<Maybe<Scalars['Int']>>>;
  styles: Maybe<SitePluginPluginOptionsPresetFunkStyles>;
};

export type SitePluginPluginOptionsPresetFunkColors = {
  background: Maybe<Scalars['String']>;
  muted: Maybe<Scalars['String']>;
  primary: Maybe<Scalars['String']>;
  secondary: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkColorsFilterInput = {
  background: Maybe<StringQueryOperatorInput>;
  muted: Maybe<StringQueryOperatorInput>;
  primary: Maybe<StringQueryOperatorInput>;
  secondary: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkFilterInput = {
  colors: Maybe<SitePluginPluginOptionsPresetFunkColorsFilterInput>;
  fontSizes: Maybe<IntQueryOperatorInput>;
  fontWeights: Maybe<SitePluginPluginOptionsPresetFunkFontWeightsFilterInput>;
  fonts: Maybe<SitePluginPluginOptionsPresetFunkFontsFilterInput>;
  lineHeights: Maybe<SitePluginPluginOptionsPresetFunkLineHeightsFilterInput>;
  space: Maybe<IntQueryOperatorInput>;
  styles: Maybe<SitePluginPluginOptionsPresetFunkStylesFilterInput>;
};

export type SitePluginPluginOptionsPresetFunkFontWeights = {
  body: Maybe<Scalars['Int']>;
  bold: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPresetFunkFontWeightsFilterInput = {
  body: Maybe<IntQueryOperatorInput>;
  bold: Maybe<IntQueryOperatorInput>;
  heading: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkFonts = {
  body: Maybe<Scalars['String']>;
  heading: Maybe<Scalars['String']>;
  monospace: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkFontsFilterInput = {
  body: Maybe<StringQueryOperatorInput>;
  heading: Maybe<StringQueryOperatorInput>;
  monospace: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkLineHeights = {
  body: Maybe<Scalars['Float']>;
  heading: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPresetFunkLineHeightsFilterInput = {
  body: Maybe<FloatQueryOperatorInput>;
  heading: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStyles = {
  a: Maybe<SitePluginPluginOptionsPresetFunkStylesA>;
  code: Maybe<SitePluginPluginOptionsPresetFunkStylesCode>;
  h1: Maybe<SitePluginPluginOptionsPresetFunkStylesH1>;
  h2: Maybe<SitePluginPluginOptionsPresetFunkStylesH2>;
  h3: Maybe<SitePluginPluginOptionsPresetFunkStylesH3>;
  h4: Maybe<SitePluginPluginOptionsPresetFunkStylesH4>;
  h5: Maybe<SitePluginPluginOptionsPresetFunkStylesH5>;
  h6: Maybe<SitePluginPluginOptionsPresetFunkStylesH6>;
  img: Maybe<SitePluginPluginOptionsPresetFunkStylesImg>;
  p: Maybe<SitePluginPluginOptionsPresetFunkStylesP>;
  pre: Maybe<SitePluginPluginOptionsPresetFunkStylesPre>;
  root: Maybe<SitePluginPluginOptionsPresetFunkStylesRoot>;
  table: Maybe<SitePluginPluginOptionsPresetFunkStylesTable>;
  td: Maybe<SitePluginPluginOptionsPresetFunkStylesTd>;
  th: Maybe<SitePluginPluginOptionsPresetFunkStylesTh>;
};

export type SitePluginPluginOptionsPresetFunkStylesA = {
  color: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesAFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesCode = {
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesCodeFilterInput = {
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesFilterInput = {
  a: Maybe<SitePluginPluginOptionsPresetFunkStylesAFilterInput>;
  code: Maybe<SitePluginPluginOptionsPresetFunkStylesCodeFilterInput>;
  h1: Maybe<SitePluginPluginOptionsPresetFunkStylesH1FilterInput>;
  h2: Maybe<SitePluginPluginOptionsPresetFunkStylesH2FilterInput>;
  h3: Maybe<SitePluginPluginOptionsPresetFunkStylesH3FilterInput>;
  h4: Maybe<SitePluginPluginOptionsPresetFunkStylesH4FilterInput>;
  h5: Maybe<SitePluginPluginOptionsPresetFunkStylesH5FilterInput>;
  h6: Maybe<SitePluginPluginOptionsPresetFunkStylesH6FilterInput>;
  img: Maybe<SitePluginPluginOptionsPresetFunkStylesImgFilterInput>;
  p: Maybe<SitePluginPluginOptionsPresetFunkStylesPFilterInput>;
  pre: Maybe<SitePluginPluginOptionsPresetFunkStylesPreFilterInput>;
  root: Maybe<SitePluginPluginOptionsPresetFunkStylesRootFilterInput>;
  table: Maybe<SitePluginPluginOptionsPresetFunkStylesTableFilterInput>;
  td: Maybe<SitePluginPluginOptionsPresetFunkStylesTdFilterInput>;
  th: Maybe<SitePluginPluginOptionsPresetFunkStylesThFilterInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH1 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH1FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH2 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH2FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH3 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH3FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH4 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH4FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH5 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH5FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesH6 = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontSize: Maybe<Scalars['Int']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesH6FilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontSize: Maybe<IntQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesImg = {
  maxWidth: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesImgFilterInput = {
  maxWidth: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesP = {
  color: Maybe<Scalars['String']>;
  fontFamily: Maybe<Scalars['String']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesPFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesPre = {
  code: Maybe<SitePluginPluginOptionsPresetFunkStylesPreCode>;
  fontFamily: Maybe<Scalars['String']>;
  overflowX: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesPreCode = {
  color: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesPreCodeFilterInput = {
  color: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesPreFilterInput = {
  code: Maybe<SitePluginPluginOptionsPresetFunkStylesPreCodeFilterInput>;
  fontFamily: Maybe<StringQueryOperatorInput>;
  overflowX: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesRoot = {
  fontFamily: Maybe<Scalars['String']>;
  fontWeight: Maybe<Scalars['String']>;
  lineHeight: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesRootFilterInput = {
  fontFamily: Maybe<StringQueryOperatorInput>;
  fontWeight: Maybe<StringQueryOperatorInput>;
  lineHeight: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesTable = {
  borderCollapse: Maybe<Scalars['String']>;
  borderSpacing: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesTableFilterInput = {
  borderCollapse: Maybe<StringQueryOperatorInput>;
  borderSpacing: Maybe<IntQueryOperatorInput>;
  width: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesTd = {
  borderBottomStyle: Maybe<Scalars['String']>;
  textAlign: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesTdFilterInput = {
  borderBottomStyle: Maybe<StringQueryOperatorInput>;
  textAlign: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPresetFunkStylesTh = {
  borderBottomStyle: Maybe<Scalars['String']>;
  textAlign: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPresetFunkStylesThFilterInput = {
  borderBottomStyle: Maybe<StringQueryOperatorInput>;
  textAlign: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  author: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  ne: Maybe<Scalars['String']>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  preset: Maybe<Scalars['JSON']>;
  prismPreset: Maybe<Scalars['JSON']>;
};

export type ThemeUiConfigConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<ThemeUiConfigEdge>;
  group: Array<ThemeUiConfigGroupConnection>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldsEnum;
};


export type ThemeUiConfigConnectionGroupArgs = {
  field: ThemeUiConfigFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type ThemeUiConfigEdge = {
  next: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous: Maybe<ThemeUiConfig>;
};

export enum ThemeUiConfigFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Preset = 'preset',
  PrismPreset = 'prismPreset'
}

export type ThemeUiConfigFilterInput = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  preset: Maybe<JsonQueryOperatorInput>;
  prismPreset: Maybe<JsonQueryOperatorInput>;
};

export type ThemeUiConfigGroupConnection = {
  edges: Array<ThemeUiConfigEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ThemeUiConfigSortInput = {
  fields: Maybe<Array<Maybe<ThemeUiConfigFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type TransformOptions = {
  cropFocus: Maybe<ImageCropFocus>;
  duotone: Maybe<DuotoneGradient>;
  fit: Maybe<ImageFit>;
  grayscale: Maybe<Scalars['Boolean']>;
  rotate: Maybe<Scalars['Int']>;
  trim: Maybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: Maybe<Scalars['Int']>;
};
