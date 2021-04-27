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

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GraphCmsImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type GraphCms_Asset = Node & {
  authorAvatar: Array<GraphCms_Author>;
  children: Array<Node>;
  coverImagePost: Array<GraphCms_Post>;
  createdAt: Scalars['JSON'];
  createdBy: Maybe<GraphCms_User>;
  fileName: Scalars['String'];
  gatsbyImageData: Maybe<Scalars['JSON']>;
  handle: Scalars['String'];
  height: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  internal: Internal;
  locale: GraphCms_Locale;
  mimeType: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  publishedAt: Maybe<Scalars['JSON']>;
  publishedBy: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  seoImage: Array<GraphCms_Seo>;
  size: Maybe<Scalars['Float']>;
  stage: GraphCms_Stage;
  updatedAt: Scalars['JSON'];
  updatedBy: Maybe<GraphCms_User>;
  url: Scalars['String'];
  width: Maybe<Scalars['Float']>;
};


export type GraphCms_AssetGatsbyImageDataArgs = {
  aspectRatio: Maybe<Scalars['Float']>;
  backgroundColor: Maybe<Scalars['String']>;
  breakpoints: Maybe<Array<Maybe<Scalars['Int']>>>;
  height: Maybe<Scalars['Int']>;
  layout: Maybe<GatsbyImageLayout>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  placeholder: Maybe<GraphCmsImagePlaceholder>;
  quality: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type GraphCms_AssetConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_AssetEdge>;
  group: Array<GraphCms_AssetGroupConnection>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionGroupArgs = {
  field: GraphCms_AssetFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_AssetEdge = {
  next: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous: Maybe<GraphCms_Asset>;
};

export enum GraphCms_AssetFieldsEnum {
  AuthorAvatar = 'authorAvatar',
  AuthorAvatarBiography = 'authorAvatar___biography',
  AuthorAvatarChildren = 'authorAvatar___children',
  AuthorAvatarChildrenChildren = 'authorAvatar___children___children',
  AuthorAvatarChildrenChildrenChildren = 'authorAvatar___children___children___children',
  AuthorAvatarChildrenChildrenId = 'authorAvatar___children___children___id',
  AuthorAvatarChildrenId = 'authorAvatar___children___id',
  AuthorAvatarChildrenInternalContent = 'authorAvatar___children___internal___content',
  AuthorAvatarChildrenInternalContentDigest = 'authorAvatar___children___internal___contentDigest',
  AuthorAvatarChildrenInternalDescription = 'authorAvatar___children___internal___description',
  AuthorAvatarChildrenInternalFieldOwners = 'authorAvatar___children___internal___fieldOwners',
  AuthorAvatarChildrenInternalIgnoreType = 'authorAvatar___children___internal___ignoreType',
  AuthorAvatarChildrenInternalMediaType = 'authorAvatar___children___internal___mediaType',
  AuthorAvatarChildrenInternalOwner = 'authorAvatar___children___internal___owner',
  AuthorAvatarChildrenInternalType = 'authorAvatar___children___internal___type',
  AuthorAvatarChildrenParentChildren = 'authorAvatar___children___parent___children',
  AuthorAvatarChildrenParentId = 'authorAvatar___children___parent___id',
  AuthorAvatarCreatedAt = 'authorAvatar___createdAt',
  AuthorAvatarCreatedByChildren = 'authorAvatar___createdBy___children',
  AuthorAvatarCreatedByChildrenChildren = 'authorAvatar___createdBy___children___children',
  AuthorAvatarCreatedByChildrenId = 'authorAvatar___createdBy___children___id',
  AuthorAvatarCreatedByCreatedAt = 'authorAvatar___createdBy___createdAt',
  AuthorAvatarCreatedById = 'authorAvatar___createdBy___id',
  AuthorAvatarCreatedByInternalContent = 'authorAvatar___createdBy___internal___content',
  AuthorAvatarCreatedByInternalContentDigest = 'authorAvatar___createdBy___internal___contentDigest',
  AuthorAvatarCreatedByInternalDescription = 'authorAvatar___createdBy___internal___description',
  AuthorAvatarCreatedByInternalFieldOwners = 'authorAvatar___createdBy___internal___fieldOwners',
  AuthorAvatarCreatedByInternalIgnoreType = 'authorAvatar___createdBy___internal___ignoreType',
  AuthorAvatarCreatedByInternalMediaType = 'authorAvatar___createdBy___internal___mediaType',
  AuthorAvatarCreatedByInternalOwner = 'authorAvatar___createdBy___internal___owner',
  AuthorAvatarCreatedByInternalType = 'authorAvatar___createdBy___internal___type',
  AuthorAvatarCreatedByIsActive = 'authorAvatar___createdBy___isActive',
  AuthorAvatarCreatedByKind = 'authorAvatar___createdBy___kind',
  AuthorAvatarCreatedByName = 'authorAvatar___createdBy___name',
  AuthorAvatarCreatedByParentChildren = 'authorAvatar___createdBy___parent___children',
  AuthorAvatarCreatedByParentId = 'authorAvatar___createdBy___parent___id',
  AuthorAvatarCreatedByPicture = 'authorAvatar___createdBy___picture',
  AuthorAvatarCreatedByPublishedAt = 'authorAvatar___createdBy___publishedAt',
  AuthorAvatarCreatedByRemoteId = 'authorAvatar___createdBy___remoteId',
  AuthorAvatarCreatedByRemoteTypeName = 'authorAvatar___createdBy___remoteTypeName',
  AuthorAvatarCreatedByStage = 'authorAvatar___createdBy___stage',
  AuthorAvatarCreatedByUpdatedAt = 'authorAvatar___createdBy___updatedAt',
  AuthorAvatarId = 'authorAvatar___id',
  AuthorAvatarInternalContent = 'authorAvatar___internal___content',
  AuthorAvatarInternalContentDigest = 'authorAvatar___internal___contentDigest',
  AuthorAvatarInternalDescription = 'authorAvatar___internal___description',
  AuthorAvatarInternalFieldOwners = 'authorAvatar___internal___fieldOwners',
  AuthorAvatarInternalIgnoreType = 'authorAvatar___internal___ignoreType',
  AuthorAvatarInternalMediaType = 'authorAvatar___internal___mediaType',
  AuthorAvatarInternalOwner = 'authorAvatar___internal___owner',
  AuthorAvatarInternalType = 'authorAvatar___internal___type',
  AuthorAvatarName = 'authorAvatar___name',
  AuthorAvatarParentChildren = 'authorAvatar___parent___children',
  AuthorAvatarParentChildrenChildren = 'authorAvatar___parent___children___children',
  AuthorAvatarParentChildrenId = 'authorAvatar___parent___children___id',
  AuthorAvatarParentId = 'authorAvatar___parent___id',
  AuthorAvatarParentInternalContent = 'authorAvatar___parent___internal___content',
  AuthorAvatarParentInternalContentDigest = 'authorAvatar___parent___internal___contentDigest',
  AuthorAvatarParentInternalDescription = 'authorAvatar___parent___internal___description',
  AuthorAvatarParentInternalFieldOwners = 'authorAvatar___parent___internal___fieldOwners',
  AuthorAvatarParentInternalIgnoreType = 'authorAvatar___parent___internal___ignoreType',
  AuthorAvatarParentInternalMediaType = 'authorAvatar___parent___internal___mediaType',
  AuthorAvatarParentInternalOwner = 'authorAvatar___parent___internal___owner',
  AuthorAvatarParentInternalType = 'authorAvatar___parent___internal___type',
  AuthorAvatarParentParentChildren = 'authorAvatar___parent___parent___children',
  AuthorAvatarParentParentId = 'authorAvatar___parent___parent___id',
  AuthorAvatarPictureAuthorAvatar = 'authorAvatar___picture___authorAvatar',
  AuthorAvatarPictureAuthorAvatarBiography = 'authorAvatar___picture___authorAvatar___biography',
  AuthorAvatarPictureAuthorAvatarChildren = 'authorAvatar___picture___authorAvatar___children',
  AuthorAvatarPictureAuthorAvatarCreatedAt = 'authorAvatar___picture___authorAvatar___createdAt',
  AuthorAvatarPictureAuthorAvatarId = 'authorAvatar___picture___authorAvatar___id',
  AuthorAvatarPictureAuthorAvatarName = 'authorAvatar___picture___authorAvatar___name',
  AuthorAvatarPictureAuthorAvatarPosts = 'authorAvatar___picture___authorAvatar___posts',
  AuthorAvatarPictureAuthorAvatarPublishedAt = 'authorAvatar___picture___authorAvatar___publishedAt',
  AuthorAvatarPictureAuthorAvatarRemoteId = 'authorAvatar___picture___authorAvatar___remoteId',
  AuthorAvatarPictureAuthorAvatarRemoteTypeName = 'authorAvatar___picture___authorAvatar___remoteTypeName',
  AuthorAvatarPictureAuthorAvatarStage = 'authorAvatar___picture___authorAvatar___stage',
  AuthorAvatarPictureAuthorAvatarTitle = 'authorAvatar___picture___authorAvatar___title',
  AuthorAvatarPictureAuthorAvatarUpdatedAt = 'authorAvatar___picture___authorAvatar___updatedAt',
  AuthorAvatarPictureChildren = 'authorAvatar___picture___children',
  AuthorAvatarPictureChildrenChildren = 'authorAvatar___picture___children___children',
  AuthorAvatarPictureChildrenId = 'authorAvatar___picture___children___id',
  AuthorAvatarPictureCoverImagePost = 'authorAvatar___picture___coverImagePost',
  AuthorAvatarPictureCoverImagePostChildren = 'authorAvatar___picture___coverImagePost___children',
  AuthorAvatarPictureCoverImagePostCreatedAt = 'authorAvatar___picture___coverImagePost___createdAt',
  AuthorAvatarPictureCoverImagePostDate = 'authorAvatar___picture___coverImagePost___date',
  AuthorAvatarPictureCoverImagePostExcerpt = 'authorAvatar___picture___coverImagePost___excerpt',
  AuthorAvatarPictureCoverImagePostId = 'authorAvatar___picture___coverImagePost___id',
  AuthorAvatarPictureCoverImagePostPublishedAt = 'authorAvatar___picture___coverImagePost___publishedAt',
  AuthorAvatarPictureCoverImagePostRemoteId = 'authorAvatar___picture___coverImagePost___remoteId',
  AuthorAvatarPictureCoverImagePostRemoteTypeName = 'authorAvatar___picture___coverImagePost___remoteTypeName',
  AuthorAvatarPictureCoverImagePostSlug = 'authorAvatar___picture___coverImagePost___slug',
  AuthorAvatarPictureCoverImagePostStage = 'authorAvatar___picture___coverImagePost___stage',
  AuthorAvatarPictureCoverImagePostTags = 'authorAvatar___picture___coverImagePost___tags',
  AuthorAvatarPictureCoverImagePostTitle = 'authorAvatar___picture___coverImagePost___title',
  AuthorAvatarPictureCoverImagePostUpdatedAt = 'authorAvatar___picture___coverImagePost___updatedAt',
  AuthorAvatarPictureCreatedAt = 'authorAvatar___picture___createdAt',
  AuthorAvatarPictureCreatedByChildren = 'authorAvatar___picture___createdBy___children',
  AuthorAvatarPictureCreatedByCreatedAt = 'authorAvatar___picture___createdBy___createdAt',
  AuthorAvatarPictureCreatedById = 'authorAvatar___picture___createdBy___id',
  AuthorAvatarPictureCreatedByIsActive = 'authorAvatar___picture___createdBy___isActive',
  AuthorAvatarPictureCreatedByKind = 'authorAvatar___picture___createdBy___kind',
  AuthorAvatarPictureCreatedByName = 'authorAvatar___picture___createdBy___name',
  AuthorAvatarPictureCreatedByPicture = 'authorAvatar___picture___createdBy___picture',
  AuthorAvatarPictureCreatedByPublishedAt = 'authorAvatar___picture___createdBy___publishedAt',
  AuthorAvatarPictureCreatedByRemoteId = 'authorAvatar___picture___createdBy___remoteId',
  AuthorAvatarPictureCreatedByRemoteTypeName = 'authorAvatar___picture___createdBy___remoteTypeName',
  AuthorAvatarPictureCreatedByStage = 'authorAvatar___picture___createdBy___stage',
  AuthorAvatarPictureCreatedByUpdatedAt = 'authorAvatar___picture___createdBy___updatedAt',
  AuthorAvatarPictureFileName = 'authorAvatar___picture___fileName',
  AuthorAvatarPictureHandle = 'authorAvatar___picture___handle',
  AuthorAvatarPictureHeight = 'authorAvatar___picture___height',
  AuthorAvatarPictureId = 'authorAvatar___picture___id',
  AuthorAvatarPictureInternalContent = 'authorAvatar___picture___internal___content',
  AuthorAvatarPictureInternalContentDigest = 'authorAvatar___picture___internal___contentDigest',
  AuthorAvatarPictureInternalDescription = 'authorAvatar___picture___internal___description',
  AuthorAvatarPictureInternalFieldOwners = 'authorAvatar___picture___internal___fieldOwners',
  AuthorAvatarPictureInternalIgnoreType = 'authorAvatar___picture___internal___ignoreType',
  AuthorAvatarPictureInternalMediaType = 'authorAvatar___picture___internal___mediaType',
  AuthorAvatarPictureInternalOwner = 'authorAvatar___picture___internal___owner',
  AuthorAvatarPictureInternalType = 'authorAvatar___picture___internal___type',
  AuthorAvatarPictureLocale = 'authorAvatar___picture___locale',
  AuthorAvatarPictureMimeType = 'authorAvatar___picture___mimeType',
  AuthorAvatarPictureParentChildren = 'authorAvatar___picture___parent___children',
  AuthorAvatarPictureParentId = 'authorAvatar___picture___parent___id',
  AuthorAvatarPicturePublishedAt = 'authorAvatar___picture___publishedAt',
  AuthorAvatarPicturePublishedByChildren = 'authorAvatar___picture___publishedBy___children',
  AuthorAvatarPicturePublishedByCreatedAt = 'authorAvatar___picture___publishedBy___createdAt',
  AuthorAvatarPicturePublishedById = 'authorAvatar___picture___publishedBy___id',
  AuthorAvatarPicturePublishedByIsActive = 'authorAvatar___picture___publishedBy___isActive',
  AuthorAvatarPicturePublishedByKind = 'authorAvatar___picture___publishedBy___kind',
  AuthorAvatarPicturePublishedByName = 'authorAvatar___picture___publishedBy___name',
  AuthorAvatarPicturePublishedByPicture = 'authorAvatar___picture___publishedBy___picture',
  AuthorAvatarPicturePublishedByPublishedAt = 'authorAvatar___picture___publishedBy___publishedAt',
  AuthorAvatarPicturePublishedByRemoteId = 'authorAvatar___picture___publishedBy___remoteId',
  AuthorAvatarPicturePublishedByRemoteTypeName = 'authorAvatar___picture___publishedBy___remoteTypeName',
  AuthorAvatarPicturePublishedByStage = 'authorAvatar___picture___publishedBy___stage',
  AuthorAvatarPicturePublishedByUpdatedAt = 'authorAvatar___picture___publishedBy___updatedAt',
  AuthorAvatarPictureRemoteId = 'authorAvatar___picture___remoteId',
  AuthorAvatarPictureRemoteTypeName = 'authorAvatar___picture___remoteTypeName',
  AuthorAvatarPictureSeoImage = 'authorAvatar___picture___seoImage',
  AuthorAvatarPictureSeoImageChildren = 'authorAvatar___picture___seoImage___children',
  AuthorAvatarPictureSeoImageCreatedAt = 'authorAvatar___picture___seoImage___createdAt',
  AuthorAvatarPictureSeoImageDescription = 'authorAvatar___picture___seoImage___description',
  AuthorAvatarPictureSeoImageId = 'authorAvatar___picture___seoImage___id',
  AuthorAvatarPictureSeoImageKeywords = 'authorAvatar___picture___seoImage___keywords',
  AuthorAvatarPictureSeoImagePublishedAt = 'authorAvatar___picture___seoImage___publishedAt',
  AuthorAvatarPictureSeoImageRemoteId = 'authorAvatar___picture___seoImage___remoteId',
  AuthorAvatarPictureSeoImageRemoteTypeName = 'authorAvatar___picture___seoImage___remoteTypeName',
  AuthorAvatarPictureSeoImageStage = 'authorAvatar___picture___seoImage___stage',
  AuthorAvatarPictureSeoImageTitle = 'authorAvatar___picture___seoImage___title',
  AuthorAvatarPictureSeoImageUpdatedAt = 'authorAvatar___picture___seoImage___updatedAt',
  AuthorAvatarPictureSize = 'authorAvatar___picture___size',
  AuthorAvatarPictureStage = 'authorAvatar___picture___stage',
  AuthorAvatarPictureUpdatedAt = 'authorAvatar___picture___updatedAt',
  AuthorAvatarPictureUpdatedByChildren = 'authorAvatar___picture___updatedBy___children',
  AuthorAvatarPictureUpdatedByCreatedAt = 'authorAvatar___picture___updatedBy___createdAt',
  AuthorAvatarPictureUpdatedById = 'authorAvatar___picture___updatedBy___id',
  AuthorAvatarPictureUpdatedByIsActive = 'authorAvatar___picture___updatedBy___isActive',
  AuthorAvatarPictureUpdatedByKind = 'authorAvatar___picture___updatedBy___kind',
  AuthorAvatarPictureUpdatedByName = 'authorAvatar___picture___updatedBy___name',
  AuthorAvatarPictureUpdatedByPicture = 'authorAvatar___picture___updatedBy___picture',
  AuthorAvatarPictureUpdatedByPublishedAt = 'authorAvatar___picture___updatedBy___publishedAt',
  AuthorAvatarPictureUpdatedByRemoteId = 'authorAvatar___picture___updatedBy___remoteId',
  AuthorAvatarPictureUpdatedByRemoteTypeName = 'authorAvatar___picture___updatedBy___remoteTypeName',
  AuthorAvatarPictureUpdatedByStage = 'authorAvatar___picture___updatedBy___stage',
  AuthorAvatarPictureUpdatedByUpdatedAt = 'authorAvatar___picture___updatedBy___updatedAt',
  AuthorAvatarPictureUrl = 'authorAvatar___picture___url',
  AuthorAvatarPictureWidth = 'authorAvatar___picture___width',
  AuthorAvatarPosts = 'authorAvatar___posts',
  AuthorAvatarPostsAuthorBiography = 'authorAvatar___posts___author___biography',
  AuthorAvatarPostsAuthorChildren = 'authorAvatar___posts___author___children',
  AuthorAvatarPostsAuthorCreatedAt = 'authorAvatar___posts___author___createdAt',
  AuthorAvatarPostsAuthorId = 'authorAvatar___posts___author___id',
  AuthorAvatarPostsAuthorName = 'authorAvatar___posts___author___name',
  AuthorAvatarPostsAuthorPosts = 'authorAvatar___posts___author___posts',
  AuthorAvatarPostsAuthorPublishedAt = 'authorAvatar___posts___author___publishedAt',
  AuthorAvatarPostsAuthorRemoteId = 'authorAvatar___posts___author___remoteId',
  AuthorAvatarPostsAuthorRemoteTypeName = 'authorAvatar___posts___author___remoteTypeName',
  AuthorAvatarPostsAuthorStage = 'authorAvatar___posts___author___stage',
  AuthorAvatarPostsAuthorTitle = 'authorAvatar___posts___author___title',
  AuthorAvatarPostsAuthorUpdatedAt = 'authorAvatar___posts___author___updatedAt',
  AuthorAvatarPostsChildren = 'authorAvatar___posts___children',
  AuthorAvatarPostsChildrenChildren = 'authorAvatar___posts___children___children',
  AuthorAvatarPostsChildrenId = 'authorAvatar___posts___children___id',
  AuthorAvatarPostsContentHtml = 'authorAvatar___posts___content___html',
  AuthorAvatarPostsContentMarkdown = 'authorAvatar___posts___content___markdown',
  AuthorAvatarPostsContentRaw = 'authorAvatar___posts___content___raw',
  AuthorAvatarPostsContentRemoteTypeName = 'authorAvatar___posts___content___remoteTypeName',
  AuthorAvatarPostsContentText = 'authorAvatar___posts___content___text',
  AuthorAvatarPostsCoverImageAuthorAvatar = 'authorAvatar___posts___coverImage___authorAvatar',
  AuthorAvatarPostsCoverImageChildren = 'authorAvatar___posts___coverImage___children',
  AuthorAvatarPostsCoverImageCoverImagePost = 'authorAvatar___posts___coverImage___coverImagePost',
  AuthorAvatarPostsCoverImageCreatedAt = 'authorAvatar___posts___coverImage___createdAt',
  AuthorAvatarPostsCoverImageFileName = 'authorAvatar___posts___coverImage___fileName',
  AuthorAvatarPostsCoverImageHandle = 'authorAvatar___posts___coverImage___handle',
  AuthorAvatarPostsCoverImageHeight = 'authorAvatar___posts___coverImage___height',
  AuthorAvatarPostsCoverImageId = 'authorAvatar___posts___coverImage___id',
  AuthorAvatarPostsCoverImageLocale = 'authorAvatar___posts___coverImage___locale',
  AuthorAvatarPostsCoverImageMimeType = 'authorAvatar___posts___coverImage___mimeType',
  AuthorAvatarPostsCoverImagePublishedAt = 'authorAvatar___posts___coverImage___publishedAt',
  AuthorAvatarPostsCoverImageRemoteId = 'authorAvatar___posts___coverImage___remoteId',
  AuthorAvatarPostsCoverImageRemoteTypeName = 'authorAvatar___posts___coverImage___remoteTypeName',
  AuthorAvatarPostsCoverImageSeoImage = 'authorAvatar___posts___coverImage___seoImage',
  AuthorAvatarPostsCoverImageSize = 'authorAvatar___posts___coverImage___size',
  AuthorAvatarPostsCoverImageStage = 'authorAvatar___posts___coverImage___stage',
  AuthorAvatarPostsCoverImageUpdatedAt = 'authorAvatar___posts___coverImage___updatedAt',
  AuthorAvatarPostsCoverImageUrl = 'authorAvatar___posts___coverImage___url',
  AuthorAvatarPostsCoverImageWidth = 'authorAvatar___posts___coverImage___width',
  AuthorAvatarPostsCreatedAt = 'authorAvatar___posts___createdAt',
  AuthorAvatarPostsCreatedByChildren = 'authorAvatar___posts___createdBy___children',
  AuthorAvatarPostsCreatedByCreatedAt = 'authorAvatar___posts___createdBy___createdAt',
  AuthorAvatarPostsCreatedById = 'authorAvatar___posts___createdBy___id',
  AuthorAvatarPostsCreatedByIsActive = 'authorAvatar___posts___createdBy___isActive',
  AuthorAvatarPostsCreatedByKind = 'authorAvatar___posts___createdBy___kind',
  AuthorAvatarPostsCreatedByName = 'authorAvatar___posts___createdBy___name',
  AuthorAvatarPostsCreatedByPicture = 'authorAvatar___posts___createdBy___picture',
  AuthorAvatarPostsCreatedByPublishedAt = 'authorAvatar___posts___createdBy___publishedAt',
  AuthorAvatarPostsCreatedByRemoteId = 'authorAvatar___posts___createdBy___remoteId',
  AuthorAvatarPostsCreatedByRemoteTypeName = 'authorAvatar___posts___createdBy___remoteTypeName',
  AuthorAvatarPostsCreatedByStage = 'authorAvatar___posts___createdBy___stage',
  AuthorAvatarPostsCreatedByUpdatedAt = 'authorAvatar___posts___createdBy___updatedAt',
  AuthorAvatarPostsDate = 'authorAvatar___posts___date',
  AuthorAvatarPostsExcerpt = 'authorAvatar___posts___excerpt',
  AuthorAvatarPostsId = 'authorAvatar___posts___id',
  AuthorAvatarPostsInternalContent = 'authorAvatar___posts___internal___content',
  AuthorAvatarPostsInternalContentDigest = 'authorAvatar___posts___internal___contentDigest',
  AuthorAvatarPostsInternalDescription = 'authorAvatar___posts___internal___description',
  AuthorAvatarPostsInternalFieldOwners = 'authorAvatar___posts___internal___fieldOwners',
  AuthorAvatarPostsInternalIgnoreType = 'authorAvatar___posts___internal___ignoreType',
  AuthorAvatarPostsInternalMediaType = 'authorAvatar___posts___internal___mediaType',
  AuthorAvatarPostsInternalOwner = 'authorAvatar___posts___internal___owner',
  AuthorAvatarPostsInternalType = 'authorAvatar___posts___internal___type',
  AuthorAvatarPostsParentChildren = 'authorAvatar___posts___parent___children',
  AuthorAvatarPostsParentId = 'authorAvatar___posts___parent___id',
  AuthorAvatarPostsPublishedAt = 'authorAvatar___posts___publishedAt',
  AuthorAvatarPostsPublishedByChildren = 'authorAvatar___posts___publishedBy___children',
  AuthorAvatarPostsPublishedByCreatedAt = 'authorAvatar___posts___publishedBy___createdAt',
  AuthorAvatarPostsPublishedById = 'authorAvatar___posts___publishedBy___id',
  AuthorAvatarPostsPublishedByIsActive = 'authorAvatar___posts___publishedBy___isActive',
  AuthorAvatarPostsPublishedByKind = 'authorAvatar___posts___publishedBy___kind',
  AuthorAvatarPostsPublishedByName = 'authorAvatar___posts___publishedBy___name',
  AuthorAvatarPostsPublishedByPicture = 'authorAvatar___posts___publishedBy___picture',
  AuthorAvatarPostsPublishedByPublishedAt = 'authorAvatar___posts___publishedBy___publishedAt',
  AuthorAvatarPostsPublishedByRemoteId = 'authorAvatar___posts___publishedBy___remoteId',
  AuthorAvatarPostsPublishedByRemoteTypeName = 'authorAvatar___posts___publishedBy___remoteTypeName',
  AuthorAvatarPostsPublishedByStage = 'authorAvatar___posts___publishedBy___stage',
  AuthorAvatarPostsPublishedByUpdatedAt = 'authorAvatar___posts___publishedBy___updatedAt',
  AuthorAvatarPostsRemoteId = 'authorAvatar___posts___remoteId',
  AuthorAvatarPostsRemoteTypeName = 'authorAvatar___posts___remoteTypeName',
  AuthorAvatarPostsSeoChildren = 'authorAvatar___posts___seo___children',
  AuthorAvatarPostsSeoCreatedAt = 'authorAvatar___posts___seo___createdAt',
  AuthorAvatarPostsSeoDescription = 'authorAvatar___posts___seo___description',
  AuthorAvatarPostsSeoId = 'authorAvatar___posts___seo___id',
  AuthorAvatarPostsSeoKeywords = 'authorAvatar___posts___seo___keywords',
  AuthorAvatarPostsSeoPublishedAt = 'authorAvatar___posts___seo___publishedAt',
  AuthorAvatarPostsSeoRemoteId = 'authorAvatar___posts___seo___remoteId',
  AuthorAvatarPostsSeoRemoteTypeName = 'authorAvatar___posts___seo___remoteTypeName',
  AuthorAvatarPostsSeoStage = 'authorAvatar___posts___seo___stage',
  AuthorAvatarPostsSeoTitle = 'authorAvatar___posts___seo___title',
  AuthorAvatarPostsSeoUpdatedAt = 'authorAvatar___posts___seo___updatedAt',
  AuthorAvatarPostsSlug = 'authorAvatar___posts___slug',
  AuthorAvatarPostsStage = 'authorAvatar___posts___stage',
  AuthorAvatarPostsTags = 'authorAvatar___posts___tags',
  AuthorAvatarPostsTitle = 'authorAvatar___posts___title',
  AuthorAvatarPostsUpdatedAt = 'authorAvatar___posts___updatedAt',
  AuthorAvatarPostsUpdatedByChildren = 'authorAvatar___posts___updatedBy___children',
  AuthorAvatarPostsUpdatedByCreatedAt = 'authorAvatar___posts___updatedBy___createdAt',
  AuthorAvatarPostsUpdatedById = 'authorAvatar___posts___updatedBy___id',
  AuthorAvatarPostsUpdatedByIsActive = 'authorAvatar___posts___updatedBy___isActive',
  AuthorAvatarPostsUpdatedByKind = 'authorAvatar___posts___updatedBy___kind',
  AuthorAvatarPostsUpdatedByName = 'authorAvatar___posts___updatedBy___name',
  AuthorAvatarPostsUpdatedByPicture = 'authorAvatar___posts___updatedBy___picture',
  AuthorAvatarPostsUpdatedByPublishedAt = 'authorAvatar___posts___updatedBy___publishedAt',
  AuthorAvatarPostsUpdatedByRemoteId = 'authorAvatar___posts___updatedBy___remoteId',
  AuthorAvatarPostsUpdatedByRemoteTypeName = 'authorAvatar___posts___updatedBy___remoteTypeName',
  AuthorAvatarPostsUpdatedByStage = 'authorAvatar___posts___updatedBy___stage',
  AuthorAvatarPostsUpdatedByUpdatedAt = 'authorAvatar___posts___updatedBy___updatedAt',
  AuthorAvatarPublishedAt = 'authorAvatar___publishedAt',
  AuthorAvatarPublishedByChildren = 'authorAvatar___publishedBy___children',
  AuthorAvatarPublishedByChildrenChildren = 'authorAvatar___publishedBy___children___children',
  AuthorAvatarPublishedByChildrenId = 'authorAvatar___publishedBy___children___id',
  AuthorAvatarPublishedByCreatedAt = 'authorAvatar___publishedBy___createdAt',
  AuthorAvatarPublishedById = 'authorAvatar___publishedBy___id',
  AuthorAvatarPublishedByInternalContent = 'authorAvatar___publishedBy___internal___content',
  AuthorAvatarPublishedByInternalContentDigest = 'authorAvatar___publishedBy___internal___contentDigest',
  AuthorAvatarPublishedByInternalDescription = 'authorAvatar___publishedBy___internal___description',
  AuthorAvatarPublishedByInternalFieldOwners = 'authorAvatar___publishedBy___internal___fieldOwners',
  AuthorAvatarPublishedByInternalIgnoreType = 'authorAvatar___publishedBy___internal___ignoreType',
  AuthorAvatarPublishedByInternalMediaType = 'authorAvatar___publishedBy___internal___mediaType',
  AuthorAvatarPublishedByInternalOwner = 'authorAvatar___publishedBy___internal___owner',
  AuthorAvatarPublishedByInternalType = 'authorAvatar___publishedBy___internal___type',
  AuthorAvatarPublishedByIsActive = 'authorAvatar___publishedBy___isActive',
  AuthorAvatarPublishedByKind = 'authorAvatar___publishedBy___kind',
  AuthorAvatarPublishedByName = 'authorAvatar___publishedBy___name',
  AuthorAvatarPublishedByParentChildren = 'authorAvatar___publishedBy___parent___children',
  AuthorAvatarPublishedByParentId = 'authorAvatar___publishedBy___parent___id',
  AuthorAvatarPublishedByPicture = 'authorAvatar___publishedBy___picture',
  AuthorAvatarPublishedByPublishedAt = 'authorAvatar___publishedBy___publishedAt',
  AuthorAvatarPublishedByRemoteId = 'authorAvatar___publishedBy___remoteId',
  AuthorAvatarPublishedByRemoteTypeName = 'authorAvatar___publishedBy___remoteTypeName',
  AuthorAvatarPublishedByStage = 'authorAvatar___publishedBy___stage',
  AuthorAvatarPublishedByUpdatedAt = 'authorAvatar___publishedBy___updatedAt',
  AuthorAvatarRemoteId = 'authorAvatar___remoteId',
  AuthorAvatarRemoteTypeName = 'authorAvatar___remoteTypeName',
  AuthorAvatarStage = 'authorAvatar___stage',
  AuthorAvatarTitle = 'authorAvatar___title',
  AuthorAvatarUpdatedAt = 'authorAvatar___updatedAt',
  AuthorAvatarUpdatedByChildren = 'authorAvatar___updatedBy___children',
  AuthorAvatarUpdatedByChildrenChildren = 'authorAvatar___updatedBy___children___children',
  AuthorAvatarUpdatedByChildrenId = 'authorAvatar___updatedBy___children___id',
  AuthorAvatarUpdatedByCreatedAt = 'authorAvatar___updatedBy___createdAt',
  AuthorAvatarUpdatedById = 'authorAvatar___updatedBy___id',
  AuthorAvatarUpdatedByInternalContent = 'authorAvatar___updatedBy___internal___content',
  AuthorAvatarUpdatedByInternalContentDigest = 'authorAvatar___updatedBy___internal___contentDigest',
  AuthorAvatarUpdatedByInternalDescription = 'authorAvatar___updatedBy___internal___description',
  AuthorAvatarUpdatedByInternalFieldOwners = 'authorAvatar___updatedBy___internal___fieldOwners',
  AuthorAvatarUpdatedByInternalIgnoreType = 'authorAvatar___updatedBy___internal___ignoreType',
  AuthorAvatarUpdatedByInternalMediaType = 'authorAvatar___updatedBy___internal___mediaType',
  AuthorAvatarUpdatedByInternalOwner = 'authorAvatar___updatedBy___internal___owner',
  AuthorAvatarUpdatedByInternalType = 'authorAvatar___updatedBy___internal___type',
  AuthorAvatarUpdatedByIsActive = 'authorAvatar___updatedBy___isActive',
  AuthorAvatarUpdatedByKind = 'authorAvatar___updatedBy___kind',
  AuthorAvatarUpdatedByName = 'authorAvatar___updatedBy___name',
  AuthorAvatarUpdatedByParentChildren = 'authorAvatar___updatedBy___parent___children',
  AuthorAvatarUpdatedByParentId = 'authorAvatar___updatedBy___parent___id',
  AuthorAvatarUpdatedByPicture = 'authorAvatar___updatedBy___picture',
  AuthorAvatarUpdatedByPublishedAt = 'authorAvatar___updatedBy___publishedAt',
  AuthorAvatarUpdatedByRemoteId = 'authorAvatar___updatedBy___remoteId',
  AuthorAvatarUpdatedByRemoteTypeName = 'authorAvatar___updatedBy___remoteTypeName',
  AuthorAvatarUpdatedByStage = 'authorAvatar___updatedBy___stage',
  AuthorAvatarUpdatedByUpdatedAt = 'authorAvatar___updatedBy___updatedAt',
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
  CoverImagePost = 'coverImagePost',
  CoverImagePostAuthorBiography = 'coverImagePost___author___biography',
  CoverImagePostAuthorChildren = 'coverImagePost___author___children',
  CoverImagePostAuthorChildrenChildren = 'coverImagePost___author___children___children',
  CoverImagePostAuthorChildrenId = 'coverImagePost___author___children___id',
  CoverImagePostAuthorCreatedAt = 'coverImagePost___author___createdAt',
  CoverImagePostAuthorCreatedByChildren = 'coverImagePost___author___createdBy___children',
  CoverImagePostAuthorCreatedByCreatedAt = 'coverImagePost___author___createdBy___createdAt',
  CoverImagePostAuthorCreatedById = 'coverImagePost___author___createdBy___id',
  CoverImagePostAuthorCreatedByIsActive = 'coverImagePost___author___createdBy___isActive',
  CoverImagePostAuthorCreatedByKind = 'coverImagePost___author___createdBy___kind',
  CoverImagePostAuthorCreatedByName = 'coverImagePost___author___createdBy___name',
  CoverImagePostAuthorCreatedByPicture = 'coverImagePost___author___createdBy___picture',
  CoverImagePostAuthorCreatedByPublishedAt = 'coverImagePost___author___createdBy___publishedAt',
  CoverImagePostAuthorCreatedByRemoteId = 'coverImagePost___author___createdBy___remoteId',
  CoverImagePostAuthorCreatedByRemoteTypeName = 'coverImagePost___author___createdBy___remoteTypeName',
  CoverImagePostAuthorCreatedByStage = 'coverImagePost___author___createdBy___stage',
  CoverImagePostAuthorCreatedByUpdatedAt = 'coverImagePost___author___createdBy___updatedAt',
  CoverImagePostAuthorId = 'coverImagePost___author___id',
  CoverImagePostAuthorInternalContent = 'coverImagePost___author___internal___content',
  CoverImagePostAuthorInternalContentDigest = 'coverImagePost___author___internal___contentDigest',
  CoverImagePostAuthorInternalDescription = 'coverImagePost___author___internal___description',
  CoverImagePostAuthorInternalFieldOwners = 'coverImagePost___author___internal___fieldOwners',
  CoverImagePostAuthorInternalIgnoreType = 'coverImagePost___author___internal___ignoreType',
  CoverImagePostAuthorInternalMediaType = 'coverImagePost___author___internal___mediaType',
  CoverImagePostAuthorInternalOwner = 'coverImagePost___author___internal___owner',
  CoverImagePostAuthorInternalType = 'coverImagePost___author___internal___type',
  CoverImagePostAuthorName = 'coverImagePost___author___name',
  CoverImagePostAuthorParentChildren = 'coverImagePost___author___parent___children',
  CoverImagePostAuthorParentId = 'coverImagePost___author___parent___id',
  CoverImagePostAuthorPictureAuthorAvatar = 'coverImagePost___author___picture___authorAvatar',
  CoverImagePostAuthorPictureChildren = 'coverImagePost___author___picture___children',
  CoverImagePostAuthorPictureCoverImagePost = 'coverImagePost___author___picture___coverImagePost',
  CoverImagePostAuthorPictureCreatedAt = 'coverImagePost___author___picture___createdAt',
  CoverImagePostAuthorPictureFileName = 'coverImagePost___author___picture___fileName',
  CoverImagePostAuthorPictureHandle = 'coverImagePost___author___picture___handle',
  CoverImagePostAuthorPictureHeight = 'coverImagePost___author___picture___height',
  CoverImagePostAuthorPictureId = 'coverImagePost___author___picture___id',
  CoverImagePostAuthorPictureLocale = 'coverImagePost___author___picture___locale',
  CoverImagePostAuthorPictureMimeType = 'coverImagePost___author___picture___mimeType',
  CoverImagePostAuthorPicturePublishedAt = 'coverImagePost___author___picture___publishedAt',
  CoverImagePostAuthorPictureRemoteId = 'coverImagePost___author___picture___remoteId',
  CoverImagePostAuthorPictureRemoteTypeName = 'coverImagePost___author___picture___remoteTypeName',
  CoverImagePostAuthorPictureSeoImage = 'coverImagePost___author___picture___seoImage',
  CoverImagePostAuthorPictureSize = 'coverImagePost___author___picture___size',
  CoverImagePostAuthorPictureStage = 'coverImagePost___author___picture___stage',
  CoverImagePostAuthorPictureUpdatedAt = 'coverImagePost___author___picture___updatedAt',
  CoverImagePostAuthorPictureUrl = 'coverImagePost___author___picture___url',
  CoverImagePostAuthorPictureWidth = 'coverImagePost___author___picture___width',
  CoverImagePostAuthorPosts = 'coverImagePost___author___posts',
  CoverImagePostAuthorPostsChildren = 'coverImagePost___author___posts___children',
  CoverImagePostAuthorPostsCreatedAt = 'coverImagePost___author___posts___createdAt',
  CoverImagePostAuthorPostsDate = 'coverImagePost___author___posts___date',
  CoverImagePostAuthorPostsExcerpt = 'coverImagePost___author___posts___excerpt',
  CoverImagePostAuthorPostsId = 'coverImagePost___author___posts___id',
  CoverImagePostAuthorPostsPublishedAt = 'coverImagePost___author___posts___publishedAt',
  CoverImagePostAuthorPostsRemoteId = 'coverImagePost___author___posts___remoteId',
  CoverImagePostAuthorPostsRemoteTypeName = 'coverImagePost___author___posts___remoteTypeName',
  CoverImagePostAuthorPostsSlug = 'coverImagePost___author___posts___slug',
  CoverImagePostAuthorPostsStage = 'coverImagePost___author___posts___stage',
  CoverImagePostAuthorPostsTags = 'coverImagePost___author___posts___tags',
  CoverImagePostAuthorPostsTitle = 'coverImagePost___author___posts___title',
  CoverImagePostAuthorPostsUpdatedAt = 'coverImagePost___author___posts___updatedAt',
  CoverImagePostAuthorPublishedAt = 'coverImagePost___author___publishedAt',
  CoverImagePostAuthorPublishedByChildren = 'coverImagePost___author___publishedBy___children',
  CoverImagePostAuthorPublishedByCreatedAt = 'coverImagePost___author___publishedBy___createdAt',
  CoverImagePostAuthorPublishedById = 'coverImagePost___author___publishedBy___id',
  CoverImagePostAuthorPublishedByIsActive = 'coverImagePost___author___publishedBy___isActive',
  CoverImagePostAuthorPublishedByKind = 'coverImagePost___author___publishedBy___kind',
  CoverImagePostAuthorPublishedByName = 'coverImagePost___author___publishedBy___name',
  CoverImagePostAuthorPublishedByPicture = 'coverImagePost___author___publishedBy___picture',
  CoverImagePostAuthorPublishedByPublishedAt = 'coverImagePost___author___publishedBy___publishedAt',
  CoverImagePostAuthorPublishedByRemoteId = 'coverImagePost___author___publishedBy___remoteId',
  CoverImagePostAuthorPublishedByRemoteTypeName = 'coverImagePost___author___publishedBy___remoteTypeName',
  CoverImagePostAuthorPublishedByStage = 'coverImagePost___author___publishedBy___stage',
  CoverImagePostAuthorPublishedByUpdatedAt = 'coverImagePost___author___publishedBy___updatedAt',
  CoverImagePostAuthorRemoteId = 'coverImagePost___author___remoteId',
  CoverImagePostAuthorRemoteTypeName = 'coverImagePost___author___remoteTypeName',
  CoverImagePostAuthorStage = 'coverImagePost___author___stage',
  CoverImagePostAuthorTitle = 'coverImagePost___author___title',
  CoverImagePostAuthorUpdatedAt = 'coverImagePost___author___updatedAt',
  CoverImagePostAuthorUpdatedByChildren = 'coverImagePost___author___updatedBy___children',
  CoverImagePostAuthorUpdatedByCreatedAt = 'coverImagePost___author___updatedBy___createdAt',
  CoverImagePostAuthorUpdatedById = 'coverImagePost___author___updatedBy___id',
  CoverImagePostAuthorUpdatedByIsActive = 'coverImagePost___author___updatedBy___isActive',
  CoverImagePostAuthorUpdatedByKind = 'coverImagePost___author___updatedBy___kind',
  CoverImagePostAuthorUpdatedByName = 'coverImagePost___author___updatedBy___name',
  CoverImagePostAuthorUpdatedByPicture = 'coverImagePost___author___updatedBy___picture',
  CoverImagePostAuthorUpdatedByPublishedAt = 'coverImagePost___author___updatedBy___publishedAt',
  CoverImagePostAuthorUpdatedByRemoteId = 'coverImagePost___author___updatedBy___remoteId',
  CoverImagePostAuthorUpdatedByRemoteTypeName = 'coverImagePost___author___updatedBy___remoteTypeName',
  CoverImagePostAuthorUpdatedByStage = 'coverImagePost___author___updatedBy___stage',
  CoverImagePostAuthorUpdatedByUpdatedAt = 'coverImagePost___author___updatedBy___updatedAt',
  CoverImagePostChildren = 'coverImagePost___children',
  CoverImagePostChildrenChildren = 'coverImagePost___children___children',
  CoverImagePostChildrenChildrenChildren = 'coverImagePost___children___children___children',
  CoverImagePostChildrenChildrenId = 'coverImagePost___children___children___id',
  CoverImagePostChildrenId = 'coverImagePost___children___id',
  CoverImagePostChildrenInternalContent = 'coverImagePost___children___internal___content',
  CoverImagePostChildrenInternalContentDigest = 'coverImagePost___children___internal___contentDigest',
  CoverImagePostChildrenInternalDescription = 'coverImagePost___children___internal___description',
  CoverImagePostChildrenInternalFieldOwners = 'coverImagePost___children___internal___fieldOwners',
  CoverImagePostChildrenInternalIgnoreType = 'coverImagePost___children___internal___ignoreType',
  CoverImagePostChildrenInternalMediaType = 'coverImagePost___children___internal___mediaType',
  CoverImagePostChildrenInternalOwner = 'coverImagePost___children___internal___owner',
  CoverImagePostChildrenInternalType = 'coverImagePost___children___internal___type',
  CoverImagePostChildrenParentChildren = 'coverImagePost___children___parent___children',
  CoverImagePostChildrenParentId = 'coverImagePost___children___parent___id',
  CoverImagePostContentHtml = 'coverImagePost___content___html',
  CoverImagePostContentMarkdown = 'coverImagePost___content___markdown',
  CoverImagePostContentRaw = 'coverImagePost___content___raw',
  CoverImagePostContentRemoteTypeName = 'coverImagePost___content___remoteTypeName',
  CoverImagePostContentText = 'coverImagePost___content___text',
  CoverImagePostCoverImageAuthorAvatar = 'coverImagePost___coverImage___authorAvatar',
  CoverImagePostCoverImageAuthorAvatarBiography = 'coverImagePost___coverImage___authorAvatar___biography',
  CoverImagePostCoverImageAuthorAvatarChildren = 'coverImagePost___coverImage___authorAvatar___children',
  CoverImagePostCoverImageAuthorAvatarCreatedAt = 'coverImagePost___coverImage___authorAvatar___createdAt',
  CoverImagePostCoverImageAuthorAvatarId = 'coverImagePost___coverImage___authorAvatar___id',
  CoverImagePostCoverImageAuthorAvatarName = 'coverImagePost___coverImage___authorAvatar___name',
  CoverImagePostCoverImageAuthorAvatarPosts = 'coverImagePost___coverImage___authorAvatar___posts',
  CoverImagePostCoverImageAuthorAvatarPublishedAt = 'coverImagePost___coverImage___authorAvatar___publishedAt',
  CoverImagePostCoverImageAuthorAvatarRemoteId = 'coverImagePost___coverImage___authorAvatar___remoteId',
  CoverImagePostCoverImageAuthorAvatarRemoteTypeName = 'coverImagePost___coverImage___authorAvatar___remoteTypeName',
  CoverImagePostCoverImageAuthorAvatarStage = 'coverImagePost___coverImage___authorAvatar___stage',
  CoverImagePostCoverImageAuthorAvatarTitle = 'coverImagePost___coverImage___authorAvatar___title',
  CoverImagePostCoverImageAuthorAvatarUpdatedAt = 'coverImagePost___coverImage___authorAvatar___updatedAt',
  CoverImagePostCoverImageChildren = 'coverImagePost___coverImage___children',
  CoverImagePostCoverImageChildrenChildren = 'coverImagePost___coverImage___children___children',
  CoverImagePostCoverImageChildrenId = 'coverImagePost___coverImage___children___id',
  CoverImagePostCoverImageCoverImagePost = 'coverImagePost___coverImage___coverImagePost',
  CoverImagePostCoverImageCoverImagePostChildren = 'coverImagePost___coverImage___coverImagePost___children',
  CoverImagePostCoverImageCoverImagePostCreatedAt = 'coverImagePost___coverImage___coverImagePost___createdAt',
  CoverImagePostCoverImageCoverImagePostDate = 'coverImagePost___coverImage___coverImagePost___date',
  CoverImagePostCoverImageCoverImagePostExcerpt = 'coverImagePost___coverImage___coverImagePost___excerpt',
  CoverImagePostCoverImageCoverImagePostId = 'coverImagePost___coverImage___coverImagePost___id',
  CoverImagePostCoverImageCoverImagePostPublishedAt = 'coverImagePost___coverImage___coverImagePost___publishedAt',
  CoverImagePostCoverImageCoverImagePostRemoteId = 'coverImagePost___coverImage___coverImagePost___remoteId',
  CoverImagePostCoverImageCoverImagePostRemoteTypeName = 'coverImagePost___coverImage___coverImagePost___remoteTypeName',
  CoverImagePostCoverImageCoverImagePostSlug = 'coverImagePost___coverImage___coverImagePost___slug',
  CoverImagePostCoverImageCoverImagePostStage = 'coverImagePost___coverImage___coverImagePost___stage',
  CoverImagePostCoverImageCoverImagePostTags = 'coverImagePost___coverImage___coverImagePost___tags',
  CoverImagePostCoverImageCoverImagePostTitle = 'coverImagePost___coverImage___coverImagePost___title',
  CoverImagePostCoverImageCoverImagePostUpdatedAt = 'coverImagePost___coverImage___coverImagePost___updatedAt',
  CoverImagePostCoverImageCreatedAt = 'coverImagePost___coverImage___createdAt',
  CoverImagePostCoverImageCreatedByChildren = 'coverImagePost___coverImage___createdBy___children',
  CoverImagePostCoverImageCreatedByCreatedAt = 'coverImagePost___coverImage___createdBy___createdAt',
  CoverImagePostCoverImageCreatedById = 'coverImagePost___coverImage___createdBy___id',
  CoverImagePostCoverImageCreatedByIsActive = 'coverImagePost___coverImage___createdBy___isActive',
  CoverImagePostCoverImageCreatedByKind = 'coverImagePost___coverImage___createdBy___kind',
  CoverImagePostCoverImageCreatedByName = 'coverImagePost___coverImage___createdBy___name',
  CoverImagePostCoverImageCreatedByPicture = 'coverImagePost___coverImage___createdBy___picture',
  CoverImagePostCoverImageCreatedByPublishedAt = 'coverImagePost___coverImage___createdBy___publishedAt',
  CoverImagePostCoverImageCreatedByRemoteId = 'coverImagePost___coverImage___createdBy___remoteId',
  CoverImagePostCoverImageCreatedByRemoteTypeName = 'coverImagePost___coverImage___createdBy___remoteTypeName',
  CoverImagePostCoverImageCreatedByStage = 'coverImagePost___coverImage___createdBy___stage',
  CoverImagePostCoverImageCreatedByUpdatedAt = 'coverImagePost___coverImage___createdBy___updatedAt',
  CoverImagePostCoverImageFileName = 'coverImagePost___coverImage___fileName',
  CoverImagePostCoverImageHandle = 'coverImagePost___coverImage___handle',
  CoverImagePostCoverImageHeight = 'coverImagePost___coverImage___height',
  CoverImagePostCoverImageId = 'coverImagePost___coverImage___id',
  CoverImagePostCoverImageInternalContent = 'coverImagePost___coverImage___internal___content',
  CoverImagePostCoverImageInternalContentDigest = 'coverImagePost___coverImage___internal___contentDigest',
  CoverImagePostCoverImageInternalDescription = 'coverImagePost___coverImage___internal___description',
  CoverImagePostCoverImageInternalFieldOwners = 'coverImagePost___coverImage___internal___fieldOwners',
  CoverImagePostCoverImageInternalIgnoreType = 'coverImagePost___coverImage___internal___ignoreType',
  CoverImagePostCoverImageInternalMediaType = 'coverImagePost___coverImage___internal___mediaType',
  CoverImagePostCoverImageInternalOwner = 'coverImagePost___coverImage___internal___owner',
  CoverImagePostCoverImageInternalType = 'coverImagePost___coverImage___internal___type',
  CoverImagePostCoverImageLocale = 'coverImagePost___coverImage___locale',
  CoverImagePostCoverImageMimeType = 'coverImagePost___coverImage___mimeType',
  CoverImagePostCoverImageParentChildren = 'coverImagePost___coverImage___parent___children',
  CoverImagePostCoverImageParentId = 'coverImagePost___coverImage___parent___id',
  CoverImagePostCoverImagePublishedAt = 'coverImagePost___coverImage___publishedAt',
  CoverImagePostCoverImagePublishedByChildren = 'coverImagePost___coverImage___publishedBy___children',
  CoverImagePostCoverImagePublishedByCreatedAt = 'coverImagePost___coverImage___publishedBy___createdAt',
  CoverImagePostCoverImagePublishedById = 'coverImagePost___coverImage___publishedBy___id',
  CoverImagePostCoverImagePublishedByIsActive = 'coverImagePost___coverImage___publishedBy___isActive',
  CoverImagePostCoverImagePublishedByKind = 'coverImagePost___coverImage___publishedBy___kind',
  CoverImagePostCoverImagePublishedByName = 'coverImagePost___coverImage___publishedBy___name',
  CoverImagePostCoverImagePublishedByPicture = 'coverImagePost___coverImage___publishedBy___picture',
  CoverImagePostCoverImagePublishedByPublishedAt = 'coverImagePost___coverImage___publishedBy___publishedAt',
  CoverImagePostCoverImagePublishedByRemoteId = 'coverImagePost___coverImage___publishedBy___remoteId',
  CoverImagePostCoverImagePublishedByRemoteTypeName = 'coverImagePost___coverImage___publishedBy___remoteTypeName',
  CoverImagePostCoverImagePublishedByStage = 'coverImagePost___coverImage___publishedBy___stage',
  CoverImagePostCoverImagePublishedByUpdatedAt = 'coverImagePost___coverImage___publishedBy___updatedAt',
  CoverImagePostCoverImageRemoteId = 'coverImagePost___coverImage___remoteId',
  CoverImagePostCoverImageRemoteTypeName = 'coverImagePost___coverImage___remoteTypeName',
  CoverImagePostCoverImageSeoImage = 'coverImagePost___coverImage___seoImage',
  CoverImagePostCoverImageSeoImageChildren = 'coverImagePost___coverImage___seoImage___children',
  CoverImagePostCoverImageSeoImageCreatedAt = 'coverImagePost___coverImage___seoImage___createdAt',
  CoverImagePostCoverImageSeoImageDescription = 'coverImagePost___coverImage___seoImage___description',
  CoverImagePostCoverImageSeoImageId = 'coverImagePost___coverImage___seoImage___id',
  CoverImagePostCoverImageSeoImageKeywords = 'coverImagePost___coverImage___seoImage___keywords',
  CoverImagePostCoverImageSeoImagePublishedAt = 'coverImagePost___coverImage___seoImage___publishedAt',
  CoverImagePostCoverImageSeoImageRemoteId = 'coverImagePost___coverImage___seoImage___remoteId',
  CoverImagePostCoverImageSeoImageRemoteTypeName = 'coverImagePost___coverImage___seoImage___remoteTypeName',
  CoverImagePostCoverImageSeoImageStage = 'coverImagePost___coverImage___seoImage___stage',
  CoverImagePostCoverImageSeoImageTitle = 'coverImagePost___coverImage___seoImage___title',
  CoverImagePostCoverImageSeoImageUpdatedAt = 'coverImagePost___coverImage___seoImage___updatedAt',
  CoverImagePostCoverImageSize = 'coverImagePost___coverImage___size',
  CoverImagePostCoverImageStage = 'coverImagePost___coverImage___stage',
  CoverImagePostCoverImageUpdatedAt = 'coverImagePost___coverImage___updatedAt',
  CoverImagePostCoverImageUpdatedByChildren = 'coverImagePost___coverImage___updatedBy___children',
  CoverImagePostCoverImageUpdatedByCreatedAt = 'coverImagePost___coverImage___updatedBy___createdAt',
  CoverImagePostCoverImageUpdatedById = 'coverImagePost___coverImage___updatedBy___id',
  CoverImagePostCoverImageUpdatedByIsActive = 'coverImagePost___coverImage___updatedBy___isActive',
  CoverImagePostCoverImageUpdatedByKind = 'coverImagePost___coverImage___updatedBy___kind',
  CoverImagePostCoverImageUpdatedByName = 'coverImagePost___coverImage___updatedBy___name',
  CoverImagePostCoverImageUpdatedByPicture = 'coverImagePost___coverImage___updatedBy___picture',
  CoverImagePostCoverImageUpdatedByPublishedAt = 'coverImagePost___coverImage___updatedBy___publishedAt',
  CoverImagePostCoverImageUpdatedByRemoteId = 'coverImagePost___coverImage___updatedBy___remoteId',
  CoverImagePostCoverImageUpdatedByRemoteTypeName = 'coverImagePost___coverImage___updatedBy___remoteTypeName',
  CoverImagePostCoverImageUpdatedByStage = 'coverImagePost___coverImage___updatedBy___stage',
  CoverImagePostCoverImageUpdatedByUpdatedAt = 'coverImagePost___coverImage___updatedBy___updatedAt',
  CoverImagePostCoverImageUrl = 'coverImagePost___coverImage___url',
  CoverImagePostCoverImageWidth = 'coverImagePost___coverImage___width',
  CoverImagePostCreatedAt = 'coverImagePost___createdAt',
  CoverImagePostCreatedByChildren = 'coverImagePost___createdBy___children',
  CoverImagePostCreatedByChildrenChildren = 'coverImagePost___createdBy___children___children',
  CoverImagePostCreatedByChildrenId = 'coverImagePost___createdBy___children___id',
  CoverImagePostCreatedByCreatedAt = 'coverImagePost___createdBy___createdAt',
  CoverImagePostCreatedById = 'coverImagePost___createdBy___id',
  CoverImagePostCreatedByInternalContent = 'coverImagePost___createdBy___internal___content',
  CoverImagePostCreatedByInternalContentDigest = 'coverImagePost___createdBy___internal___contentDigest',
  CoverImagePostCreatedByInternalDescription = 'coverImagePost___createdBy___internal___description',
  CoverImagePostCreatedByInternalFieldOwners = 'coverImagePost___createdBy___internal___fieldOwners',
  CoverImagePostCreatedByInternalIgnoreType = 'coverImagePost___createdBy___internal___ignoreType',
  CoverImagePostCreatedByInternalMediaType = 'coverImagePost___createdBy___internal___mediaType',
  CoverImagePostCreatedByInternalOwner = 'coverImagePost___createdBy___internal___owner',
  CoverImagePostCreatedByInternalType = 'coverImagePost___createdBy___internal___type',
  CoverImagePostCreatedByIsActive = 'coverImagePost___createdBy___isActive',
  CoverImagePostCreatedByKind = 'coverImagePost___createdBy___kind',
  CoverImagePostCreatedByName = 'coverImagePost___createdBy___name',
  CoverImagePostCreatedByParentChildren = 'coverImagePost___createdBy___parent___children',
  CoverImagePostCreatedByParentId = 'coverImagePost___createdBy___parent___id',
  CoverImagePostCreatedByPicture = 'coverImagePost___createdBy___picture',
  CoverImagePostCreatedByPublishedAt = 'coverImagePost___createdBy___publishedAt',
  CoverImagePostCreatedByRemoteId = 'coverImagePost___createdBy___remoteId',
  CoverImagePostCreatedByRemoteTypeName = 'coverImagePost___createdBy___remoteTypeName',
  CoverImagePostCreatedByStage = 'coverImagePost___createdBy___stage',
  CoverImagePostCreatedByUpdatedAt = 'coverImagePost___createdBy___updatedAt',
  CoverImagePostDate = 'coverImagePost___date',
  CoverImagePostExcerpt = 'coverImagePost___excerpt',
  CoverImagePostId = 'coverImagePost___id',
  CoverImagePostInternalContent = 'coverImagePost___internal___content',
  CoverImagePostInternalContentDigest = 'coverImagePost___internal___contentDigest',
  CoverImagePostInternalDescription = 'coverImagePost___internal___description',
  CoverImagePostInternalFieldOwners = 'coverImagePost___internal___fieldOwners',
  CoverImagePostInternalIgnoreType = 'coverImagePost___internal___ignoreType',
  CoverImagePostInternalMediaType = 'coverImagePost___internal___mediaType',
  CoverImagePostInternalOwner = 'coverImagePost___internal___owner',
  CoverImagePostInternalType = 'coverImagePost___internal___type',
  CoverImagePostParentChildren = 'coverImagePost___parent___children',
  CoverImagePostParentChildrenChildren = 'coverImagePost___parent___children___children',
  CoverImagePostParentChildrenId = 'coverImagePost___parent___children___id',
  CoverImagePostParentId = 'coverImagePost___parent___id',
  CoverImagePostParentInternalContent = 'coverImagePost___parent___internal___content',
  CoverImagePostParentInternalContentDigest = 'coverImagePost___parent___internal___contentDigest',
  CoverImagePostParentInternalDescription = 'coverImagePost___parent___internal___description',
  CoverImagePostParentInternalFieldOwners = 'coverImagePost___parent___internal___fieldOwners',
  CoverImagePostParentInternalIgnoreType = 'coverImagePost___parent___internal___ignoreType',
  CoverImagePostParentInternalMediaType = 'coverImagePost___parent___internal___mediaType',
  CoverImagePostParentInternalOwner = 'coverImagePost___parent___internal___owner',
  CoverImagePostParentInternalType = 'coverImagePost___parent___internal___type',
  CoverImagePostParentParentChildren = 'coverImagePost___parent___parent___children',
  CoverImagePostParentParentId = 'coverImagePost___parent___parent___id',
  CoverImagePostPublishedAt = 'coverImagePost___publishedAt',
  CoverImagePostPublishedByChildren = 'coverImagePost___publishedBy___children',
  CoverImagePostPublishedByChildrenChildren = 'coverImagePost___publishedBy___children___children',
  CoverImagePostPublishedByChildrenId = 'coverImagePost___publishedBy___children___id',
  CoverImagePostPublishedByCreatedAt = 'coverImagePost___publishedBy___createdAt',
  CoverImagePostPublishedById = 'coverImagePost___publishedBy___id',
  CoverImagePostPublishedByInternalContent = 'coverImagePost___publishedBy___internal___content',
  CoverImagePostPublishedByInternalContentDigest = 'coverImagePost___publishedBy___internal___contentDigest',
  CoverImagePostPublishedByInternalDescription = 'coverImagePost___publishedBy___internal___description',
  CoverImagePostPublishedByInternalFieldOwners = 'coverImagePost___publishedBy___internal___fieldOwners',
  CoverImagePostPublishedByInternalIgnoreType = 'coverImagePost___publishedBy___internal___ignoreType',
  CoverImagePostPublishedByInternalMediaType = 'coverImagePost___publishedBy___internal___mediaType',
  CoverImagePostPublishedByInternalOwner = 'coverImagePost___publishedBy___internal___owner',
  CoverImagePostPublishedByInternalType = 'coverImagePost___publishedBy___internal___type',
  CoverImagePostPublishedByIsActive = 'coverImagePost___publishedBy___isActive',
  CoverImagePostPublishedByKind = 'coverImagePost___publishedBy___kind',
  CoverImagePostPublishedByName = 'coverImagePost___publishedBy___name',
  CoverImagePostPublishedByParentChildren = 'coverImagePost___publishedBy___parent___children',
  CoverImagePostPublishedByParentId = 'coverImagePost___publishedBy___parent___id',
  CoverImagePostPublishedByPicture = 'coverImagePost___publishedBy___picture',
  CoverImagePostPublishedByPublishedAt = 'coverImagePost___publishedBy___publishedAt',
  CoverImagePostPublishedByRemoteId = 'coverImagePost___publishedBy___remoteId',
  CoverImagePostPublishedByRemoteTypeName = 'coverImagePost___publishedBy___remoteTypeName',
  CoverImagePostPublishedByStage = 'coverImagePost___publishedBy___stage',
  CoverImagePostPublishedByUpdatedAt = 'coverImagePost___publishedBy___updatedAt',
  CoverImagePostRemoteId = 'coverImagePost___remoteId',
  CoverImagePostRemoteTypeName = 'coverImagePost___remoteTypeName',
  CoverImagePostSeoChildren = 'coverImagePost___seo___children',
  CoverImagePostSeoChildrenChildren = 'coverImagePost___seo___children___children',
  CoverImagePostSeoChildrenId = 'coverImagePost___seo___children___id',
  CoverImagePostSeoCreatedAt = 'coverImagePost___seo___createdAt',
  CoverImagePostSeoCreatedByChildren = 'coverImagePost___seo___createdBy___children',
  CoverImagePostSeoCreatedByCreatedAt = 'coverImagePost___seo___createdBy___createdAt',
  CoverImagePostSeoCreatedById = 'coverImagePost___seo___createdBy___id',
  CoverImagePostSeoCreatedByIsActive = 'coverImagePost___seo___createdBy___isActive',
  CoverImagePostSeoCreatedByKind = 'coverImagePost___seo___createdBy___kind',
  CoverImagePostSeoCreatedByName = 'coverImagePost___seo___createdBy___name',
  CoverImagePostSeoCreatedByPicture = 'coverImagePost___seo___createdBy___picture',
  CoverImagePostSeoCreatedByPublishedAt = 'coverImagePost___seo___createdBy___publishedAt',
  CoverImagePostSeoCreatedByRemoteId = 'coverImagePost___seo___createdBy___remoteId',
  CoverImagePostSeoCreatedByRemoteTypeName = 'coverImagePost___seo___createdBy___remoteTypeName',
  CoverImagePostSeoCreatedByStage = 'coverImagePost___seo___createdBy___stage',
  CoverImagePostSeoCreatedByUpdatedAt = 'coverImagePost___seo___createdBy___updatedAt',
  CoverImagePostSeoDescription = 'coverImagePost___seo___description',
  CoverImagePostSeoId = 'coverImagePost___seo___id',
  CoverImagePostSeoImageAuthorAvatar = 'coverImagePost___seo___image___authorAvatar',
  CoverImagePostSeoImageChildren = 'coverImagePost___seo___image___children',
  CoverImagePostSeoImageCoverImagePost = 'coverImagePost___seo___image___coverImagePost',
  CoverImagePostSeoImageCreatedAt = 'coverImagePost___seo___image___createdAt',
  CoverImagePostSeoImageFileName = 'coverImagePost___seo___image___fileName',
  CoverImagePostSeoImageHandle = 'coverImagePost___seo___image___handle',
  CoverImagePostSeoImageHeight = 'coverImagePost___seo___image___height',
  CoverImagePostSeoImageId = 'coverImagePost___seo___image___id',
  CoverImagePostSeoImageLocale = 'coverImagePost___seo___image___locale',
  CoverImagePostSeoImageMimeType = 'coverImagePost___seo___image___mimeType',
  CoverImagePostSeoImagePublishedAt = 'coverImagePost___seo___image___publishedAt',
  CoverImagePostSeoImageRemoteId = 'coverImagePost___seo___image___remoteId',
  CoverImagePostSeoImageRemoteTypeName = 'coverImagePost___seo___image___remoteTypeName',
  CoverImagePostSeoImageSeoImage = 'coverImagePost___seo___image___seoImage',
  CoverImagePostSeoImageSize = 'coverImagePost___seo___image___size',
  CoverImagePostSeoImageStage = 'coverImagePost___seo___image___stage',
  CoverImagePostSeoImageUpdatedAt = 'coverImagePost___seo___image___updatedAt',
  CoverImagePostSeoImageUrl = 'coverImagePost___seo___image___url',
  CoverImagePostSeoImageWidth = 'coverImagePost___seo___image___width',
  CoverImagePostSeoInternalContent = 'coverImagePost___seo___internal___content',
  CoverImagePostSeoInternalContentDigest = 'coverImagePost___seo___internal___contentDigest',
  CoverImagePostSeoInternalDescription = 'coverImagePost___seo___internal___description',
  CoverImagePostSeoInternalFieldOwners = 'coverImagePost___seo___internal___fieldOwners',
  CoverImagePostSeoInternalIgnoreType = 'coverImagePost___seo___internal___ignoreType',
  CoverImagePostSeoInternalMediaType = 'coverImagePost___seo___internal___mediaType',
  CoverImagePostSeoInternalOwner = 'coverImagePost___seo___internal___owner',
  CoverImagePostSeoInternalType = 'coverImagePost___seo___internal___type',
  CoverImagePostSeoKeywords = 'coverImagePost___seo___keywords',
  CoverImagePostSeoParentChildren = 'coverImagePost___seo___parent___children',
  CoverImagePostSeoParentId = 'coverImagePost___seo___parent___id',
  CoverImagePostSeoPublishedAt = 'coverImagePost___seo___publishedAt',
  CoverImagePostSeoPublishedByChildren = 'coverImagePost___seo___publishedBy___children',
  CoverImagePostSeoPublishedByCreatedAt = 'coverImagePost___seo___publishedBy___createdAt',
  CoverImagePostSeoPublishedById = 'coverImagePost___seo___publishedBy___id',
  CoverImagePostSeoPublishedByIsActive = 'coverImagePost___seo___publishedBy___isActive',
  CoverImagePostSeoPublishedByKind = 'coverImagePost___seo___publishedBy___kind',
  CoverImagePostSeoPublishedByName = 'coverImagePost___seo___publishedBy___name',
  CoverImagePostSeoPublishedByPicture = 'coverImagePost___seo___publishedBy___picture',
  CoverImagePostSeoPublishedByPublishedAt = 'coverImagePost___seo___publishedBy___publishedAt',
  CoverImagePostSeoPublishedByRemoteId = 'coverImagePost___seo___publishedBy___remoteId',
  CoverImagePostSeoPublishedByRemoteTypeName = 'coverImagePost___seo___publishedBy___remoteTypeName',
  CoverImagePostSeoPublishedByStage = 'coverImagePost___seo___publishedBy___stage',
  CoverImagePostSeoPublishedByUpdatedAt = 'coverImagePost___seo___publishedBy___updatedAt',
  CoverImagePostSeoRemoteId = 'coverImagePost___seo___remoteId',
  CoverImagePostSeoRemoteTypeName = 'coverImagePost___seo___remoteTypeName',
  CoverImagePostSeoStage = 'coverImagePost___seo___stage',
  CoverImagePostSeoTitle = 'coverImagePost___seo___title',
  CoverImagePostSeoUpdatedAt = 'coverImagePost___seo___updatedAt',
  CoverImagePostSeoUpdatedByChildren = 'coverImagePost___seo___updatedBy___children',
  CoverImagePostSeoUpdatedByCreatedAt = 'coverImagePost___seo___updatedBy___createdAt',
  CoverImagePostSeoUpdatedById = 'coverImagePost___seo___updatedBy___id',
  CoverImagePostSeoUpdatedByIsActive = 'coverImagePost___seo___updatedBy___isActive',
  CoverImagePostSeoUpdatedByKind = 'coverImagePost___seo___updatedBy___kind',
  CoverImagePostSeoUpdatedByName = 'coverImagePost___seo___updatedBy___name',
  CoverImagePostSeoUpdatedByPicture = 'coverImagePost___seo___updatedBy___picture',
  CoverImagePostSeoUpdatedByPublishedAt = 'coverImagePost___seo___updatedBy___publishedAt',
  CoverImagePostSeoUpdatedByRemoteId = 'coverImagePost___seo___updatedBy___remoteId',
  CoverImagePostSeoUpdatedByRemoteTypeName = 'coverImagePost___seo___updatedBy___remoteTypeName',
  CoverImagePostSeoUpdatedByStage = 'coverImagePost___seo___updatedBy___stage',
  CoverImagePostSeoUpdatedByUpdatedAt = 'coverImagePost___seo___updatedBy___updatedAt',
  CoverImagePostSlug = 'coverImagePost___slug',
  CoverImagePostStage = 'coverImagePost___stage',
  CoverImagePostTags = 'coverImagePost___tags',
  CoverImagePostTitle = 'coverImagePost___title',
  CoverImagePostUpdatedAt = 'coverImagePost___updatedAt',
  CoverImagePostUpdatedByChildren = 'coverImagePost___updatedBy___children',
  CoverImagePostUpdatedByChildrenChildren = 'coverImagePost___updatedBy___children___children',
  CoverImagePostUpdatedByChildrenId = 'coverImagePost___updatedBy___children___id',
  CoverImagePostUpdatedByCreatedAt = 'coverImagePost___updatedBy___createdAt',
  CoverImagePostUpdatedById = 'coverImagePost___updatedBy___id',
  CoverImagePostUpdatedByInternalContent = 'coverImagePost___updatedBy___internal___content',
  CoverImagePostUpdatedByInternalContentDigest = 'coverImagePost___updatedBy___internal___contentDigest',
  CoverImagePostUpdatedByInternalDescription = 'coverImagePost___updatedBy___internal___description',
  CoverImagePostUpdatedByInternalFieldOwners = 'coverImagePost___updatedBy___internal___fieldOwners',
  CoverImagePostUpdatedByInternalIgnoreType = 'coverImagePost___updatedBy___internal___ignoreType',
  CoverImagePostUpdatedByInternalMediaType = 'coverImagePost___updatedBy___internal___mediaType',
  CoverImagePostUpdatedByInternalOwner = 'coverImagePost___updatedBy___internal___owner',
  CoverImagePostUpdatedByInternalType = 'coverImagePost___updatedBy___internal___type',
  CoverImagePostUpdatedByIsActive = 'coverImagePost___updatedBy___isActive',
  CoverImagePostUpdatedByKind = 'coverImagePost___updatedBy___kind',
  CoverImagePostUpdatedByName = 'coverImagePost___updatedBy___name',
  CoverImagePostUpdatedByParentChildren = 'coverImagePost___updatedBy___parent___children',
  CoverImagePostUpdatedByParentId = 'coverImagePost___updatedBy___parent___id',
  CoverImagePostUpdatedByPicture = 'coverImagePost___updatedBy___picture',
  CoverImagePostUpdatedByPublishedAt = 'coverImagePost___updatedBy___publishedAt',
  CoverImagePostUpdatedByRemoteId = 'coverImagePost___updatedBy___remoteId',
  CoverImagePostUpdatedByRemoteTypeName = 'coverImagePost___updatedBy___remoteTypeName',
  CoverImagePostUpdatedByStage = 'coverImagePost___updatedBy___stage',
  CoverImagePostUpdatedByUpdatedAt = 'coverImagePost___updatedBy___updatedAt',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  FileName = 'fileName',
  Handle = 'handle',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MimeType = 'mimeType',
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
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  SeoImage = 'seoImage',
  SeoImageChildren = 'seoImage___children',
  SeoImageChildrenChildren = 'seoImage___children___children',
  SeoImageChildrenChildrenChildren = 'seoImage___children___children___children',
  SeoImageChildrenChildrenId = 'seoImage___children___children___id',
  SeoImageChildrenId = 'seoImage___children___id',
  SeoImageChildrenInternalContent = 'seoImage___children___internal___content',
  SeoImageChildrenInternalContentDigest = 'seoImage___children___internal___contentDigest',
  SeoImageChildrenInternalDescription = 'seoImage___children___internal___description',
  SeoImageChildrenInternalFieldOwners = 'seoImage___children___internal___fieldOwners',
  SeoImageChildrenInternalIgnoreType = 'seoImage___children___internal___ignoreType',
  SeoImageChildrenInternalMediaType = 'seoImage___children___internal___mediaType',
  SeoImageChildrenInternalOwner = 'seoImage___children___internal___owner',
  SeoImageChildrenInternalType = 'seoImage___children___internal___type',
  SeoImageChildrenParentChildren = 'seoImage___children___parent___children',
  SeoImageChildrenParentId = 'seoImage___children___parent___id',
  SeoImageCreatedAt = 'seoImage___createdAt',
  SeoImageCreatedByChildren = 'seoImage___createdBy___children',
  SeoImageCreatedByChildrenChildren = 'seoImage___createdBy___children___children',
  SeoImageCreatedByChildrenId = 'seoImage___createdBy___children___id',
  SeoImageCreatedByCreatedAt = 'seoImage___createdBy___createdAt',
  SeoImageCreatedById = 'seoImage___createdBy___id',
  SeoImageCreatedByInternalContent = 'seoImage___createdBy___internal___content',
  SeoImageCreatedByInternalContentDigest = 'seoImage___createdBy___internal___contentDigest',
  SeoImageCreatedByInternalDescription = 'seoImage___createdBy___internal___description',
  SeoImageCreatedByInternalFieldOwners = 'seoImage___createdBy___internal___fieldOwners',
  SeoImageCreatedByInternalIgnoreType = 'seoImage___createdBy___internal___ignoreType',
  SeoImageCreatedByInternalMediaType = 'seoImage___createdBy___internal___mediaType',
  SeoImageCreatedByInternalOwner = 'seoImage___createdBy___internal___owner',
  SeoImageCreatedByInternalType = 'seoImage___createdBy___internal___type',
  SeoImageCreatedByIsActive = 'seoImage___createdBy___isActive',
  SeoImageCreatedByKind = 'seoImage___createdBy___kind',
  SeoImageCreatedByName = 'seoImage___createdBy___name',
  SeoImageCreatedByParentChildren = 'seoImage___createdBy___parent___children',
  SeoImageCreatedByParentId = 'seoImage___createdBy___parent___id',
  SeoImageCreatedByPicture = 'seoImage___createdBy___picture',
  SeoImageCreatedByPublishedAt = 'seoImage___createdBy___publishedAt',
  SeoImageCreatedByRemoteId = 'seoImage___createdBy___remoteId',
  SeoImageCreatedByRemoteTypeName = 'seoImage___createdBy___remoteTypeName',
  SeoImageCreatedByStage = 'seoImage___createdBy___stage',
  SeoImageCreatedByUpdatedAt = 'seoImage___createdBy___updatedAt',
  SeoImageDescription = 'seoImage___description',
  SeoImageId = 'seoImage___id',
  SeoImageImageAuthorAvatar = 'seoImage___image___authorAvatar',
  SeoImageImageAuthorAvatarBiography = 'seoImage___image___authorAvatar___biography',
  SeoImageImageAuthorAvatarChildren = 'seoImage___image___authorAvatar___children',
  SeoImageImageAuthorAvatarCreatedAt = 'seoImage___image___authorAvatar___createdAt',
  SeoImageImageAuthorAvatarId = 'seoImage___image___authorAvatar___id',
  SeoImageImageAuthorAvatarName = 'seoImage___image___authorAvatar___name',
  SeoImageImageAuthorAvatarPosts = 'seoImage___image___authorAvatar___posts',
  SeoImageImageAuthorAvatarPublishedAt = 'seoImage___image___authorAvatar___publishedAt',
  SeoImageImageAuthorAvatarRemoteId = 'seoImage___image___authorAvatar___remoteId',
  SeoImageImageAuthorAvatarRemoteTypeName = 'seoImage___image___authorAvatar___remoteTypeName',
  SeoImageImageAuthorAvatarStage = 'seoImage___image___authorAvatar___stage',
  SeoImageImageAuthorAvatarTitle = 'seoImage___image___authorAvatar___title',
  SeoImageImageAuthorAvatarUpdatedAt = 'seoImage___image___authorAvatar___updatedAt',
  SeoImageImageChildren = 'seoImage___image___children',
  SeoImageImageChildrenChildren = 'seoImage___image___children___children',
  SeoImageImageChildrenId = 'seoImage___image___children___id',
  SeoImageImageCoverImagePost = 'seoImage___image___coverImagePost',
  SeoImageImageCoverImagePostChildren = 'seoImage___image___coverImagePost___children',
  SeoImageImageCoverImagePostCreatedAt = 'seoImage___image___coverImagePost___createdAt',
  SeoImageImageCoverImagePostDate = 'seoImage___image___coverImagePost___date',
  SeoImageImageCoverImagePostExcerpt = 'seoImage___image___coverImagePost___excerpt',
  SeoImageImageCoverImagePostId = 'seoImage___image___coverImagePost___id',
  SeoImageImageCoverImagePostPublishedAt = 'seoImage___image___coverImagePost___publishedAt',
  SeoImageImageCoverImagePostRemoteId = 'seoImage___image___coverImagePost___remoteId',
  SeoImageImageCoverImagePostRemoteTypeName = 'seoImage___image___coverImagePost___remoteTypeName',
  SeoImageImageCoverImagePostSlug = 'seoImage___image___coverImagePost___slug',
  SeoImageImageCoverImagePostStage = 'seoImage___image___coverImagePost___stage',
  SeoImageImageCoverImagePostTags = 'seoImage___image___coverImagePost___tags',
  SeoImageImageCoverImagePostTitle = 'seoImage___image___coverImagePost___title',
  SeoImageImageCoverImagePostUpdatedAt = 'seoImage___image___coverImagePost___updatedAt',
  SeoImageImageCreatedAt = 'seoImage___image___createdAt',
  SeoImageImageCreatedByChildren = 'seoImage___image___createdBy___children',
  SeoImageImageCreatedByCreatedAt = 'seoImage___image___createdBy___createdAt',
  SeoImageImageCreatedById = 'seoImage___image___createdBy___id',
  SeoImageImageCreatedByIsActive = 'seoImage___image___createdBy___isActive',
  SeoImageImageCreatedByKind = 'seoImage___image___createdBy___kind',
  SeoImageImageCreatedByName = 'seoImage___image___createdBy___name',
  SeoImageImageCreatedByPicture = 'seoImage___image___createdBy___picture',
  SeoImageImageCreatedByPublishedAt = 'seoImage___image___createdBy___publishedAt',
  SeoImageImageCreatedByRemoteId = 'seoImage___image___createdBy___remoteId',
  SeoImageImageCreatedByRemoteTypeName = 'seoImage___image___createdBy___remoteTypeName',
  SeoImageImageCreatedByStage = 'seoImage___image___createdBy___stage',
  SeoImageImageCreatedByUpdatedAt = 'seoImage___image___createdBy___updatedAt',
  SeoImageImageFileName = 'seoImage___image___fileName',
  SeoImageImageHandle = 'seoImage___image___handle',
  SeoImageImageHeight = 'seoImage___image___height',
  SeoImageImageId = 'seoImage___image___id',
  SeoImageImageInternalContent = 'seoImage___image___internal___content',
  SeoImageImageInternalContentDigest = 'seoImage___image___internal___contentDigest',
  SeoImageImageInternalDescription = 'seoImage___image___internal___description',
  SeoImageImageInternalFieldOwners = 'seoImage___image___internal___fieldOwners',
  SeoImageImageInternalIgnoreType = 'seoImage___image___internal___ignoreType',
  SeoImageImageInternalMediaType = 'seoImage___image___internal___mediaType',
  SeoImageImageInternalOwner = 'seoImage___image___internal___owner',
  SeoImageImageInternalType = 'seoImage___image___internal___type',
  SeoImageImageLocale = 'seoImage___image___locale',
  SeoImageImageMimeType = 'seoImage___image___mimeType',
  SeoImageImageParentChildren = 'seoImage___image___parent___children',
  SeoImageImageParentId = 'seoImage___image___parent___id',
  SeoImageImagePublishedAt = 'seoImage___image___publishedAt',
  SeoImageImagePublishedByChildren = 'seoImage___image___publishedBy___children',
  SeoImageImagePublishedByCreatedAt = 'seoImage___image___publishedBy___createdAt',
  SeoImageImagePublishedById = 'seoImage___image___publishedBy___id',
  SeoImageImagePublishedByIsActive = 'seoImage___image___publishedBy___isActive',
  SeoImageImagePublishedByKind = 'seoImage___image___publishedBy___kind',
  SeoImageImagePublishedByName = 'seoImage___image___publishedBy___name',
  SeoImageImagePublishedByPicture = 'seoImage___image___publishedBy___picture',
  SeoImageImagePublishedByPublishedAt = 'seoImage___image___publishedBy___publishedAt',
  SeoImageImagePublishedByRemoteId = 'seoImage___image___publishedBy___remoteId',
  SeoImageImagePublishedByRemoteTypeName = 'seoImage___image___publishedBy___remoteTypeName',
  SeoImageImagePublishedByStage = 'seoImage___image___publishedBy___stage',
  SeoImageImagePublishedByUpdatedAt = 'seoImage___image___publishedBy___updatedAt',
  SeoImageImageRemoteId = 'seoImage___image___remoteId',
  SeoImageImageRemoteTypeName = 'seoImage___image___remoteTypeName',
  SeoImageImageSeoImage = 'seoImage___image___seoImage',
  SeoImageImageSeoImageChildren = 'seoImage___image___seoImage___children',
  SeoImageImageSeoImageCreatedAt = 'seoImage___image___seoImage___createdAt',
  SeoImageImageSeoImageDescription = 'seoImage___image___seoImage___description',
  SeoImageImageSeoImageId = 'seoImage___image___seoImage___id',
  SeoImageImageSeoImageKeywords = 'seoImage___image___seoImage___keywords',
  SeoImageImageSeoImagePublishedAt = 'seoImage___image___seoImage___publishedAt',
  SeoImageImageSeoImageRemoteId = 'seoImage___image___seoImage___remoteId',
  SeoImageImageSeoImageRemoteTypeName = 'seoImage___image___seoImage___remoteTypeName',
  SeoImageImageSeoImageStage = 'seoImage___image___seoImage___stage',
  SeoImageImageSeoImageTitle = 'seoImage___image___seoImage___title',
  SeoImageImageSeoImageUpdatedAt = 'seoImage___image___seoImage___updatedAt',
  SeoImageImageSize = 'seoImage___image___size',
  SeoImageImageStage = 'seoImage___image___stage',
  SeoImageImageUpdatedAt = 'seoImage___image___updatedAt',
  SeoImageImageUpdatedByChildren = 'seoImage___image___updatedBy___children',
  SeoImageImageUpdatedByCreatedAt = 'seoImage___image___updatedBy___createdAt',
  SeoImageImageUpdatedById = 'seoImage___image___updatedBy___id',
  SeoImageImageUpdatedByIsActive = 'seoImage___image___updatedBy___isActive',
  SeoImageImageUpdatedByKind = 'seoImage___image___updatedBy___kind',
  SeoImageImageUpdatedByName = 'seoImage___image___updatedBy___name',
  SeoImageImageUpdatedByPicture = 'seoImage___image___updatedBy___picture',
  SeoImageImageUpdatedByPublishedAt = 'seoImage___image___updatedBy___publishedAt',
  SeoImageImageUpdatedByRemoteId = 'seoImage___image___updatedBy___remoteId',
  SeoImageImageUpdatedByRemoteTypeName = 'seoImage___image___updatedBy___remoteTypeName',
  SeoImageImageUpdatedByStage = 'seoImage___image___updatedBy___stage',
  SeoImageImageUpdatedByUpdatedAt = 'seoImage___image___updatedBy___updatedAt',
  SeoImageImageUrl = 'seoImage___image___url',
  SeoImageImageWidth = 'seoImage___image___width',
  SeoImageInternalContent = 'seoImage___internal___content',
  SeoImageInternalContentDigest = 'seoImage___internal___contentDigest',
  SeoImageInternalDescription = 'seoImage___internal___description',
  SeoImageInternalFieldOwners = 'seoImage___internal___fieldOwners',
  SeoImageInternalIgnoreType = 'seoImage___internal___ignoreType',
  SeoImageInternalMediaType = 'seoImage___internal___mediaType',
  SeoImageInternalOwner = 'seoImage___internal___owner',
  SeoImageInternalType = 'seoImage___internal___type',
  SeoImageKeywords = 'seoImage___keywords',
  SeoImageParentChildren = 'seoImage___parent___children',
  SeoImageParentChildrenChildren = 'seoImage___parent___children___children',
  SeoImageParentChildrenId = 'seoImage___parent___children___id',
  SeoImageParentId = 'seoImage___parent___id',
  SeoImageParentInternalContent = 'seoImage___parent___internal___content',
  SeoImageParentInternalContentDigest = 'seoImage___parent___internal___contentDigest',
  SeoImageParentInternalDescription = 'seoImage___parent___internal___description',
  SeoImageParentInternalFieldOwners = 'seoImage___parent___internal___fieldOwners',
  SeoImageParentInternalIgnoreType = 'seoImage___parent___internal___ignoreType',
  SeoImageParentInternalMediaType = 'seoImage___parent___internal___mediaType',
  SeoImageParentInternalOwner = 'seoImage___parent___internal___owner',
  SeoImageParentInternalType = 'seoImage___parent___internal___type',
  SeoImageParentParentChildren = 'seoImage___parent___parent___children',
  SeoImageParentParentId = 'seoImage___parent___parent___id',
  SeoImagePublishedAt = 'seoImage___publishedAt',
  SeoImagePublishedByChildren = 'seoImage___publishedBy___children',
  SeoImagePublishedByChildrenChildren = 'seoImage___publishedBy___children___children',
  SeoImagePublishedByChildrenId = 'seoImage___publishedBy___children___id',
  SeoImagePublishedByCreatedAt = 'seoImage___publishedBy___createdAt',
  SeoImagePublishedById = 'seoImage___publishedBy___id',
  SeoImagePublishedByInternalContent = 'seoImage___publishedBy___internal___content',
  SeoImagePublishedByInternalContentDigest = 'seoImage___publishedBy___internal___contentDigest',
  SeoImagePublishedByInternalDescription = 'seoImage___publishedBy___internal___description',
  SeoImagePublishedByInternalFieldOwners = 'seoImage___publishedBy___internal___fieldOwners',
  SeoImagePublishedByInternalIgnoreType = 'seoImage___publishedBy___internal___ignoreType',
  SeoImagePublishedByInternalMediaType = 'seoImage___publishedBy___internal___mediaType',
  SeoImagePublishedByInternalOwner = 'seoImage___publishedBy___internal___owner',
  SeoImagePublishedByInternalType = 'seoImage___publishedBy___internal___type',
  SeoImagePublishedByIsActive = 'seoImage___publishedBy___isActive',
  SeoImagePublishedByKind = 'seoImage___publishedBy___kind',
  SeoImagePublishedByName = 'seoImage___publishedBy___name',
  SeoImagePublishedByParentChildren = 'seoImage___publishedBy___parent___children',
  SeoImagePublishedByParentId = 'seoImage___publishedBy___parent___id',
  SeoImagePublishedByPicture = 'seoImage___publishedBy___picture',
  SeoImagePublishedByPublishedAt = 'seoImage___publishedBy___publishedAt',
  SeoImagePublishedByRemoteId = 'seoImage___publishedBy___remoteId',
  SeoImagePublishedByRemoteTypeName = 'seoImage___publishedBy___remoteTypeName',
  SeoImagePublishedByStage = 'seoImage___publishedBy___stage',
  SeoImagePublishedByUpdatedAt = 'seoImage___publishedBy___updatedAt',
  SeoImageRemoteId = 'seoImage___remoteId',
  SeoImageRemoteTypeName = 'seoImage___remoteTypeName',
  SeoImageStage = 'seoImage___stage',
  SeoImageTitle = 'seoImage___title',
  SeoImageUpdatedAt = 'seoImage___updatedAt',
  SeoImageUpdatedByChildren = 'seoImage___updatedBy___children',
  SeoImageUpdatedByChildrenChildren = 'seoImage___updatedBy___children___children',
  SeoImageUpdatedByChildrenId = 'seoImage___updatedBy___children___id',
  SeoImageUpdatedByCreatedAt = 'seoImage___updatedBy___createdAt',
  SeoImageUpdatedById = 'seoImage___updatedBy___id',
  SeoImageUpdatedByInternalContent = 'seoImage___updatedBy___internal___content',
  SeoImageUpdatedByInternalContentDigest = 'seoImage___updatedBy___internal___contentDigest',
  SeoImageUpdatedByInternalDescription = 'seoImage___updatedBy___internal___description',
  SeoImageUpdatedByInternalFieldOwners = 'seoImage___updatedBy___internal___fieldOwners',
  SeoImageUpdatedByInternalIgnoreType = 'seoImage___updatedBy___internal___ignoreType',
  SeoImageUpdatedByInternalMediaType = 'seoImage___updatedBy___internal___mediaType',
  SeoImageUpdatedByInternalOwner = 'seoImage___updatedBy___internal___owner',
  SeoImageUpdatedByInternalType = 'seoImage___updatedBy___internal___type',
  SeoImageUpdatedByIsActive = 'seoImage___updatedBy___isActive',
  SeoImageUpdatedByKind = 'seoImage___updatedBy___kind',
  SeoImageUpdatedByName = 'seoImage___updatedBy___name',
  SeoImageUpdatedByParentChildren = 'seoImage___updatedBy___parent___children',
  SeoImageUpdatedByParentId = 'seoImage___updatedBy___parent___id',
  SeoImageUpdatedByPicture = 'seoImage___updatedBy___picture',
  SeoImageUpdatedByPublishedAt = 'seoImage___updatedBy___publishedAt',
  SeoImageUpdatedByRemoteId = 'seoImage___updatedBy___remoteId',
  SeoImageUpdatedByRemoteTypeName = 'seoImage___updatedBy___remoteTypeName',
  SeoImageUpdatedByStage = 'seoImage___updatedBy___stage',
  SeoImageUpdatedByUpdatedAt = 'seoImage___updatedBy___updatedAt',
  Size = 'size',
  Stage = 'stage',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
  Url = 'url',
  Width = 'width'
}

export type GraphCms_AssetFilterInput = {
  authorAvatar: Maybe<GraphCms_AuthorFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  coverImagePost: Maybe<GraphCms_PostFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  fileName: Maybe<StringQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  locale: Maybe<GraphCms_LocaleQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seoImage: Maybe<GraphCms_SeoFilterListInput>;
  size: Maybe<FloatQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};

export type GraphCms_AssetGroupConnection = {
  edges: Array<GraphCms_AssetEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphCms_AssetSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_AssetFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_Author = Node & {
  biography: Maybe<Scalars['String']>;
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy: Maybe<GraphCms_User>;
  id: Scalars['ID'];
  internal: Internal;
  name: Scalars['String'];
  parent: Maybe<Node>;
  picture: Maybe<GraphCms_Asset>;
  posts: Array<GraphCms_Post>;
  publishedAt: Maybe<Scalars['JSON']>;
  publishedBy: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  title: Maybe<Scalars['String']>;
  updatedAt: Scalars['JSON'];
  updatedBy: Maybe<GraphCms_User>;
};

export type GraphCms_AuthorConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_AuthorEdge>;
  group: Array<GraphCms_AuthorGroupConnection>;
  nodes: Array<GraphCms_Author>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_AuthorConnectionDistinctArgs = {
  field: GraphCms_AuthorFieldsEnum;
};


export type GraphCms_AuthorConnectionGroupArgs = {
  field: GraphCms_AuthorFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_AuthorEdge = {
  next: Maybe<GraphCms_Author>;
  node: GraphCms_Author;
  previous: Maybe<GraphCms_Author>;
};

export enum GraphCms_AuthorFieldsEnum {
  Biography = 'biography',
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
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
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
  PictureAuthorAvatar = 'picture___authorAvatar',
  PictureAuthorAvatarBiography = 'picture___authorAvatar___biography',
  PictureAuthorAvatarChildren = 'picture___authorAvatar___children',
  PictureAuthorAvatarChildrenChildren = 'picture___authorAvatar___children___children',
  PictureAuthorAvatarChildrenId = 'picture___authorAvatar___children___id',
  PictureAuthorAvatarCreatedAt = 'picture___authorAvatar___createdAt',
  PictureAuthorAvatarCreatedByChildren = 'picture___authorAvatar___createdBy___children',
  PictureAuthorAvatarCreatedByCreatedAt = 'picture___authorAvatar___createdBy___createdAt',
  PictureAuthorAvatarCreatedById = 'picture___authorAvatar___createdBy___id',
  PictureAuthorAvatarCreatedByIsActive = 'picture___authorAvatar___createdBy___isActive',
  PictureAuthorAvatarCreatedByKind = 'picture___authorAvatar___createdBy___kind',
  PictureAuthorAvatarCreatedByName = 'picture___authorAvatar___createdBy___name',
  PictureAuthorAvatarCreatedByPicture = 'picture___authorAvatar___createdBy___picture',
  PictureAuthorAvatarCreatedByPublishedAt = 'picture___authorAvatar___createdBy___publishedAt',
  PictureAuthorAvatarCreatedByRemoteId = 'picture___authorAvatar___createdBy___remoteId',
  PictureAuthorAvatarCreatedByRemoteTypeName = 'picture___authorAvatar___createdBy___remoteTypeName',
  PictureAuthorAvatarCreatedByStage = 'picture___authorAvatar___createdBy___stage',
  PictureAuthorAvatarCreatedByUpdatedAt = 'picture___authorAvatar___createdBy___updatedAt',
  PictureAuthorAvatarId = 'picture___authorAvatar___id',
  PictureAuthorAvatarInternalContent = 'picture___authorAvatar___internal___content',
  PictureAuthorAvatarInternalContentDigest = 'picture___authorAvatar___internal___contentDigest',
  PictureAuthorAvatarInternalDescription = 'picture___authorAvatar___internal___description',
  PictureAuthorAvatarInternalFieldOwners = 'picture___authorAvatar___internal___fieldOwners',
  PictureAuthorAvatarInternalIgnoreType = 'picture___authorAvatar___internal___ignoreType',
  PictureAuthorAvatarInternalMediaType = 'picture___authorAvatar___internal___mediaType',
  PictureAuthorAvatarInternalOwner = 'picture___authorAvatar___internal___owner',
  PictureAuthorAvatarInternalType = 'picture___authorAvatar___internal___type',
  PictureAuthorAvatarName = 'picture___authorAvatar___name',
  PictureAuthorAvatarParentChildren = 'picture___authorAvatar___parent___children',
  PictureAuthorAvatarParentId = 'picture___authorAvatar___parent___id',
  PictureAuthorAvatarPictureAuthorAvatar = 'picture___authorAvatar___picture___authorAvatar',
  PictureAuthorAvatarPictureChildren = 'picture___authorAvatar___picture___children',
  PictureAuthorAvatarPictureCoverImagePost = 'picture___authorAvatar___picture___coverImagePost',
  PictureAuthorAvatarPictureCreatedAt = 'picture___authorAvatar___picture___createdAt',
  PictureAuthorAvatarPictureFileName = 'picture___authorAvatar___picture___fileName',
  PictureAuthorAvatarPictureHandle = 'picture___authorAvatar___picture___handle',
  PictureAuthorAvatarPictureHeight = 'picture___authorAvatar___picture___height',
  PictureAuthorAvatarPictureId = 'picture___authorAvatar___picture___id',
  PictureAuthorAvatarPictureLocale = 'picture___authorAvatar___picture___locale',
  PictureAuthorAvatarPictureMimeType = 'picture___authorAvatar___picture___mimeType',
  PictureAuthorAvatarPicturePublishedAt = 'picture___authorAvatar___picture___publishedAt',
  PictureAuthorAvatarPictureRemoteId = 'picture___authorAvatar___picture___remoteId',
  PictureAuthorAvatarPictureRemoteTypeName = 'picture___authorAvatar___picture___remoteTypeName',
  PictureAuthorAvatarPictureSeoImage = 'picture___authorAvatar___picture___seoImage',
  PictureAuthorAvatarPictureSize = 'picture___authorAvatar___picture___size',
  PictureAuthorAvatarPictureStage = 'picture___authorAvatar___picture___stage',
  PictureAuthorAvatarPictureUpdatedAt = 'picture___authorAvatar___picture___updatedAt',
  PictureAuthorAvatarPictureUrl = 'picture___authorAvatar___picture___url',
  PictureAuthorAvatarPictureWidth = 'picture___authorAvatar___picture___width',
  PictureAuthorAvatarPosts = 'picture___authorAvatar___posts',
  PictureAuthorAvatarPostsChildren = 'picture___authorAvatar___posts___children',
  PictureAuthorAvatarPostsCreatedAt = 'picture___authorAvatar___posts___createdAt',
  PictureAuthorAvatarPostsDate = 'picture___authorAvatar___posts___date',
  PictureAuthorAvatarPostsExcerpt = 'picture___authorAvatar___posts___excerpt',
  PictureAuthorAvatarPostsId = 'picture___authorAvatar___posts___id',
  PictureAuthorAvatarPostsPublishedAt = 'picture___authorAvatar___posts___publishedAt',
  PictureAuthorAvatarPostsRemoteId = 'picture___authorAvatar___posts___remoteId',
  PictureAuthorAvatarPostsRemoteTypeName = 'picture___authorAvatar___posts___remoteTypeName',
  PictureAuthorAvatarPostsSlug = 'picture___authorAvatar___posts___slug',
  PictureAuthorAvatarPostsStage = 'picture___authorAvatar___posts___stage',
  PictureAuthorAvatarPostsTags = 'picture___authorAvatar___posts___tags',
  PictureAuthorAvatarPostsTitle = 'picture___authorAvatar___posts___title',
  PictureAuthorAvatarPostsUpdatedAt = 'picture___authorAvatar___posts___updatedAt',
  PictureAuthorAvatarPublishedAt = 'picture___authorAvatar___publishedAt',
  PictureAuthorAvatarPublishedByChildren = 'picture___authorAvatar___publishedBy___children',
  PictureAuthorAvatarPublishedByCreatedAt = 'picture___authorAvatar___publishedBy___createdAt',
  PictureAuthorAvatarPublishedById = 'picture___authorAvatar___publishedBy___id',
  PictureAuthorAvatarPublishedByIsActive = 'picture___authorAvatar___publishedBy___isActive',
  PictureAuthorAvatarPublishedByKind = 'picture___authorAvatar___publishedBy___kind',
  PictureAuthorAvatarPublishedByName = 'picture___authorAvatar___publishedBy___name',
  PictureAuthorAvatarPublishedByPicture = 'picture___authorAvatar___publishedBy___picture',
  PictureAuthorAvatarPublishedByPublishedAt = 'picture___authorAvatar___publishedBy___publishedAt',
  PictureAuthorAvatarPublishedByRemoteId = 'picture___authorAvatar___publishedBy___remoteId',
  PictureAuthorAvatarPublishedByRemoteTypeName = 'picture___authorAvatar___publishedBy___remoteTypeName',
  PictureAuthorAvatarPublishedByStage = 'picture___authorAvatar___publishedBy___stage',
  PictureAuthorAvatarPublishedByUpdatedAt = 'picture___authorAvatar___publishedBy___updatedAt',
  PictureAuthorAvatarRemoteId = 'picture___authorAvatar___remoteId',
  PictureAuthorAvatarRemoteTypeName = 'picture___authorAvatar___remoteTypeName',
  PictureAuthorAvatarStage = 'picture___authorAvatar___stage',
  PictureAuthorAvatarTitle = 'picture___authorAvatar___title',
  PictureAuthorAvatarUpdatedAt = 'picture___authorAvatar___updatedAt',
  PictureAuthorAvatarUpdatedByChildren = 'picture___authorAvatar___updatedBy___children',
  PictureAuthorAvatarUpdatedByCreatedAt = 'picture___authorAvatar___updatedBy___createdAt',
  PictureAuthorAvatarUpdatedById = 'picture___authorAvatar___updatedBy___id',
  PictureAuthorAvatarUpdatedByIsActive = 'picture___authorAvatar___updatedBy___isActive',
  PictureAuthorAvatarUpdatedByKind = 'picture___authorAvatar___updatedBy___kind',
  PictureAuthorAvatarUpdatedByName = 'picture___authorAvatar___updatedBy___name',
  PictureAuthorAvatarUpdatedByPicture = 'picture___authorAvatar___updatedBy___picture',
  PictureAuthorAvatarUpdatedByPublishedAt = 'picture___authorAvatar___updatedBy___publishedAt',
  PictureAuthorAvatarUpdatedByRemoteId = 'picture___authorAvatar___updatedBy___remoteId',
  PictureAuthorAvatarUpdatedByRemoteTypeName = 'picture___authorAvatar___updatedBy___remoteTypeName',
  PictureAuthorAvatarUpdatedByStage = 'picture___authorAvatar___updatedBy___stage',
  PictureAuthorAvatarUpdatedByUpdatedAt = 'picture___authorAvatar___updatedBy___updatedAt',
  PictureChildren = 'picture___children',
  PictureChildrenChildren = 'picture___children___children',
  PictureChildrenChildrenChildren = 'picture___children___children___children',
  PictureChildrenChildrenId = 'picture___children___children___id',
  PictureChildrenId = 'picture___children___id',
  PictureChildrenInternalContent = 'picture___children___internal___content',
  PictureChildrenInternalContentDigest = 'picture___children___internal___contentDigest',
  PictureChildrenInternalDescription = 'picture___children___internal___description',
  PictureChildrenInternalFieldOwners = 'picture___children___internal___fieldOwners',
  PictureChildrenInternalIgnoreType = 'picture___children___internal___ignoreType',
  PictureChildrenInternalMediaType = 'picture___children___internal___mediaType',
  PictureChildrenInternalOwner = 'picture___children___internal___owner',
  PictureChildrenInternalType = 'picture___children___internal___type',
  PictureChildrenParentChildren = 'picture___children___parent___children',
  PictureChildrenParentId = 'picture___children___parent___id',
  PictureCoverImagePost = 'picture___coverImagePost',
  PictureCoverImagePostAuthorBiography = 'picture___coverImagePost___author___biography',
  PictureCoverImagePostAuthorChildren = 'picture___coverImagePost___author___children',
  PictureCoverImagePostAuthorCreatedAt = 'picture___coverImagePost___author___createdAt',
  PictureCoverImagePostAuthorId = 'picture___coverImagePost___author___id',
  PictureCoverImagePostAuthorName = 'picture___coverImagePost___author___name',
  PictureCoverImagePostAuthorPosts = 'picture___coverImagePost___author___posts',
  PictureCoverImagePostAuthorPublishedAt = 'picture___coverImagePost___author___publishedAt',
  PictureCoverImagePostAuthorRemoteId = 'picture___coverImagePost___author___remoteId',
  PictureCoverImagePostAuthorRemoteTypeName = 'picture___coverImagePost___author___remoteTypeName',
  PictureCoverImagePostAuthorStage = 'picture___coverImagePost___author___stage',
  PictureCoverImagePostAuthorTitle = 'picture___coverImagePost___author___title',
  PictureCoverImagePostAuthorUpdatedAt = 'picture___coverImagePost___author___updatedAt',
  PictureCoverImagePostChildren = 'picture___coverImagePost___children',
  PictureCoverImagePostChildrenChildren = 'picture___coverImagePost___children___children',
  PictureCoverImagePostChildrenId = 'picture___coverImagePost___children___id',
  PictureCoverImagePostContentHtml = 'picture___coverImagePost___content___html',
  PictureCoverImagePostContentMarkdown = 'picture___coverImagePost___content___markdown',
  PictureCoverImagePostContentRaw = 'picture___coverImagePost___content___raw',
  PictureCoverImagePostContentRemoteTypeName = 'picture___coverImagePost___content___remoteTypeName',
  PictureCoverImagePostContentText = 'picture___coverImagePost___content___text',
  PictureCoverImagePostCoverImageAuthorAvatar = 'picture___coverImagePost___coverImage___authorAvatar',
  PictureCoverImagePostCoverImageChildren = 'picture___coverImagePost___coverImage___children',
  PictureCoverImagePostCoverImageCoverImagePost = 'picture___coverImagePost___coverImage___coverImagePost',
  PictureCoverImagePostCoverImageCreatedAt = 'picture___coverImagePost___coverImage___createdAt',
  PictureCoverImagePostCoverImageFileName = 'picture___coverImagePost___coverImage___fileName',
  PictureCoverImagePostCoverImageHandle = 'picture___coverImagePost___coverImage___handle',
  PictureCoverImagePostCoverImageHeight = 'picture___coverImagePost___coverImage___height',
  PictureCoverImagePostCoverImageId = 'picture___coverImagePost___coverImage___id',
  PictureCoverImagePostCoverImageLocale = 'picture___coverImagePost___coverImage___locale',
  PictureCoverImagePostCoverImageMimeType = 'picture___coverImagePost___coverImage___mimeType',
  PictureCoverImagePostCoverImagePublishedAt = 'picture___coverImagePost___coverImage___publishedAt',
  PictureCoverImagePostCoverImageRemoteId = 'picture___coverImagePost___coverImage___remoteId',
  PictureCoverImagePostCoverImageRemoteTypeName = 'picture___coverImagePost___coverImage___remoteTypeName',
  PictureCoverImagePostCoverImageSeoImage = 'picture___coverImagePost___coverImage___seoImage',
  PictureCoverImagePostCoverImageSize = 'picture___coverImagePost___coverImage___size',
  PictureCoverImagePostCoverImageStage = 'picture___coverImagePost___coverImage___stage',
  PictureCoverImagePostCoverImageUpdatedAt = 'picture___coverImagePost___coverImage___updatedAt',
  PictureCoverImagePostCoverImageUrl = 'picture___coverImagePost___coverImage___url',
  PictureCoverImagePostCoverImageWidth = 'picture___coverImagePost___coverImage___width',
  PictureCoverImagePostCreatedAt = 'picture___coverImagePost___createdAt',
  PictureCoverImagePostCreatedByChildren = 'picture___coverImagePost___createdBy___children',
  PictureCoverImagePostCreatedByCreatedAt = 'picture___coverImagePost___createdBy___createdAt',
  PictureCoverImagePostCreatedById = 'picture___coverImagePost___createdBy___id',
  PictureCoverImagePostCreatedByIsActive = 'picture___coverImagePost___createdBy___isActive',
  PictureCoverImagePostCreatedByKind = 'picture___coverImagePost___createdBy___kind',
  PictureCoverImagePostCreatedByName = 'picture___coverImagePost___createdBy___name',
  PictureCoverImagePostCreatedByPicture = 'picture___coverImagePost___createdBy___picture',
  PictureCoverImagePostCreatedByPublishedAt = 'picture___coverImagePost___createdBy___publishedAt',
  PictureCoverImagePostCreatedByRemoteId = 'picture___coverImagePost___createdBy___remoteId',
  PictureCoverImagePostCreatedByRemoteTypeName = 'picture___coverImagePost___createdBy___remoteTypeName',
  PictureCoverImagePostCreatedByStage = 'picture___coverImagePost___createdBy___stage',
  PictureCoverImagePostCreatedByUpdatedAt = 'picture___coverImagePost___createdBy___updatedAt',
  PictureCoverImagePostDate = 'picture___coverImagePost___date',
  PictureCoverImagePostExcerpt = 'picture___coverImagePost___excerpt',
  PictureCoverImagePostId = 'picture___coverImagePost___id',
  PictureCoverImagePostInternalContent = 'picture___coverImagePost___internal___content',
  PictureCoverImagePostInternalContentDigest = 'picture___coverImagePost___internal___contentDigest',
  PictureCoverImagePostInternalDescription = 'picture___coverImagePost___internal___description',
  PictureCoverImagePostInternalFieldOwners = 'picture___coverImagePost___internal___fieldOwners',
  PictureCoverImagePostInternalIgnoreType = 'picture___coverImagePost___internal___ignoreType',
  PictureCoverImagePostInternalMediaType = 'picture___coverImagePost___internal___mediaType',
  PictureCoverImagePostInternalOwner = 'picture___coverImagePost___internal___owner',
  PictureCoverImagePostInternalType = 'picture___coverImagePost___internal___type',
  PictureCoverImagePostParentChildren = 'picture___coverImagePost___parent___children',
  PictureCoverImagePostParentId = 'picture___coverImagePost___parent___id',
  PictureCoverImagePostPublishedAt = 'picture___coverImagePost___publishedAt',
  PictureCoverImagePostPublishedByChildren = 'picture___coverImagePost___publishedBy___children',
  PictureCoverImagePostPublishedByCreatedAt = 'picture___coverImagePost___publishedBy___createdAt',
  PictureCoverImagePostPublishedById = 'picture___coverImagePost___publishedBy___id',
  PictureCoverImagePostPublishedByIsActive = 'picture___coverImagePost___publishedBy___isActive',
  PictureCoverImagePostPublishedByKind = 'picture___coverImagePost___publishedBy___kind',
  PictureCoverImagePostPublishedByName = 'picture___coverImagePost___publishedBy___name',
  PictureCoverImagePostPublishedByPicture = 'picture___coverImagePost___publishedBy___picture',
  PictureCoverImagePostPublishedByPublishedAt = 'picture___coverImagePost___publishedBy___publishedAt',
  PictureCoverImagePostPublishedByRemoteId = 'picture___coverImagePost___publishedBy___remoteId',
  PictureCoverImagePostPublishedByRemoteTypeName = 'picture___coverImagePost___publishedBy___remoteTypeName',
  PictureCoverImagePostPublishedByStage = 'picture___coverImagePost___publishedBy___stage',
  PictureCoverImagePostPublishedByUpdatedAt = 'picture___coverImagePost___publishedBy___updatedAt',
  PictureCoverImagePostRemoteId = 'picture___coverImagePost___remoteId',
  PictureCoverImagePostRemoteTypeName = 'picture___coverImagePost___remoteTypeName',
  PictureCoverImagePostSeoChildren = 'picture___coverImagePost___seo___children',
  PictureCoverImagePostSeoCreatedAt = 'picture___coverImagePost___seo___createdAt',
  PictureCoverImagePostSeoDescription = 'picture___coverImagePost___seo___description',
  PictureCoverImagePostSeoId = 'picture___coverImagePost___seo___id',
  PictureCoverImagePostSeoKeywords = 'picture___coverImagePost___seo___keywords',
  PictureCoverImagePostSeoPublishedAt = 'picture___coverImagePost___seo___publishedAt',
  PictureCoverImagePostSeoRemoteId = 'picture___coverImagePost___seo___remoteId',
  PictureCoverImagePostSeoRemoteTypeName = 'picture___coverImagePost___seo___remoteTypeName',
  PictureCoverImagePostSeoStage = 'picture___coverImagePost___seo___stage',
  PictureCoverImagePostSeoTitle = 'picture___coverImagePost___seo___title',
  PictureCoverImagePostSeoUpdatedAt = 'picture___coverImagePost___seo___updatedAt',
  PictureCoverImagePostSlug = 'picture___coverImagePost___slug',
  PictureCoverImagePostStage = 'picture___coverImagePost___stage',
  PictureCoverImagePostTags = 'picture___coverImagePost___tags',
  PictureCoverImagePostTitle = 'picture___coverImagePost___title',
  PictureCoverImagePostUpdatedAt = 'picture___coverImagePost___updatedAt',
  PictureCoverImagePostUpdatedByChildren = 'picture___coverImagePost___updatedBy___children',
  PictureCoverImagePostUpdatedByCreatedAt = 'picture___coverImagePost___updatedBy___createdAt',
  PictureCoverImagePostUpdatedById = 'picture___coverImagePost___updatedBy___id',
  PictureCoverImagePostUpdatedByIsActive = 'picture___coverImagePost___updatedBy___isActive',
  PictureCoverImagePostUpdatedByKind = 'picture___coverImagePost___updatedBy___kind',
  PictureCoverImagePostUpdatedByName = 'picture___coverImagePost___updatedBy___name',
  PictureCoverImagePostUpdatedByPicture = 'picture___coverImagePost___updatedBy___picture',
  PictureCoverImagePostUpdatedByPublishedAt = 'picture___coverImagePost___updatedBy___publishedAt',
  PictureCoverImagePostUpdatedByRemoteId = 'picture___coverImagePost___updatedBy___remoteId',
  PictureCoverImagePostUpdatedByRemoteTypeName = 'picture___coverImagePost___updatedBy___remoteTypeName',
  PictureCoverImagePostUpdatedByStage = 'picture___coverImagePost___updatedBy___stage',
  PictureCoverImagePostUpdatedByUpdatedAt = 'picture___coverImagePost___updatedBy___updatedAt',
  PictureCreatedAt = 'picture___createdAt',
  PictureCreatedByChildren = 'picture___createdBy___children',
  PictureCreatedByChildrenChildren = 'picture___createdBy___children___children',
  PictureCreatedByChildrenId = 'picture___createdBy___children___id',
  PictureCreatedByCreatedAt = 'picture___createdBy___createdAt',
  PictureCreatedById = 'picture___createdBy___id',
  PictureCreatedByInternalContent = 'picture___createdBy___internal___content',
  PictureCreatedByInternalContentDigest = 'picture___createdBy___internal___contentDigest',
  PictureCreatedByInternalDescription = 'picture___createdBy___internal___description',
  PictureCreatedByInternalFieldOwners = 'picture___createdBy___internal___fieldOwners',
  PictureCreatedByInternalIgnoreType = 'picture___createdBy___internal___ignoreType',
  PictureCreatedByInternalMediaType = 'picture___createdBy___internal___mediaType',
  PictureCreatedByInternalOwner = 'picture___createdBy___internal___owner',
  PictureCreatedByInternalType = 'picture___createdBy___internal___type',
  PictureCreatedByIsActive = 'picture___createdBy___isActive',
  PictureCreatedByKind = 'picture___createdBy___kind',
  PictureCreatedByName = 'picture___createdBy___name',
  PictureCreatedByParentChildren = 'picture___createdBy___parent___children',
  PictureCreatedByParentId = 'picture___createdBy___parent___id',
  PictureCreatedByPicture = 'picture___createdBy___picture',
  PictureCreatedByPublishedAt = 'picture___createdBy___publishedAt',
  PictureCreatedByRemoteId = 'picture___createdBy___remoteId',
  PictureCreatedByRemoteTypeName = 'picture___createdBy___remoteTypeName',
  PictureCreatedByStage = 'picture___createdBy___stage',
  PictureCreatedByUpdatedAt = 'picture___createdBy___updatedAt',
  PictureFileName = 'picture___fileName',
  PictureHandle = 'picture___handle',
  PictureHeight = 'picture___height',
  PictureId = 'picture___id',
  PictureInternalContent = 'picture___internal___content',
  PictureInternalContentDigest = 'picture___internal___contentDigest',
  PictureInternalDescription = 'picture___internal___description',
  PictureInternalFieldOwners = 'picture___internal___fieldOwners',
  PictureInternalIgnoreType = 'picture___internal___ignoreType',
  PictureInternalMediaType = 'picture___internal___mediaType',
  PictureInternalOwner = 'picture___internal___owner',
  PictureInternalType = 'picture___internal___type',
  PictureLocale = 'picture___locale',
  PictureMimeType = 'picture___mimeType',
  PictureParentChildren = 'picture___parent___children',
  PictureParentChildrenChildren = 'picture___parent___children___children',
  PictureParentChildrenId = 'picture___parent___children___id',
  PictureParentId = 'picture___parent___id',
  PictureParentInternalContent = 'picture___parent___internal___content',
  PictureParentInternalContentDigest = 'picture___parent___internal___contentDigest',
  PictureParentInternalDescription = 'picture___parent___internal___description',
  PictureParentInternalFieldOwners = 'picture___parent___internal___fieldOwners',
  PictureParentInternalIgnoreType = 'picture___parent___internal___ignoreType',
  PictureParentInternalMediaType = 'picture___parent___internal___mediaType',
  PictureParentInternalOwner = 'picture___parent___internal___owner',
  PictureParentInternalType = 'picture___parent___internal___type',
  PictureParentParentChildren = 'picture___parent___parent___children',
  PictureParentParentId = 'picture___parent___parent___id',
  PicturePublishedAt = 'picture___publishedAt',
  PicturePublishedByChildren = 'picture___publishedBy___children',
  PicturePublishedByChildrenChildren = 'picture___publishedBy___children___children',
  PicturePublishedByChildrenId = 'picture___publishedBy___children___id',
  PicturePublishedByCreatedAt = 'picture___publishedBy___createdAt',
  PicturePublishedById = 'picture___publishedBy___id',
  PicturePublishedByInternalContent = 'picture___publishedBy___internal___content',
  PicturePublishedByInternalContentDigest = 'picture___publishedBy___internal___contentDigest',
  PicturePublishedByInternalDescription = 'picture___publishedBy___internal___description',
  PicturePublishedByInternalFieldOwners = 'picture___publishedBy___internal___fieldOwners',
  PicturePublishedByInternalIgnoreType = 'picture___publishedBy___internal___ignoreType',
  PicturePublishedByInternalMediaType = 'picture___publishedBy___internal___mediaType',
  PicturePublishedByInternalOwner = 'picture___publishedBy___internal___owner',
  PicturePublishedByInternalType = 'picture___publishedBy___internal___type',
  PicturePublishedByIsActive = 'picture___publishedBy___isActive',
  PicturePublishedByKind = 'picture___publishedBy___kind',
  PicturePublishedByName = 'picture___publishedBy___name',
  PicturePublishedByParentChildren = 'picture___publishedBy___parent___children',
  PicturePublishedByParentId = 'picture___publishedBy___parent___id',
  PicturePublishedByPicture = 'picture___publishedBy___picture',
  PicturePublishedByPublishedAt = 'picture___publishedBy___publishedAt',
  PicturePublishedByRemoteId = 'picture___publishedBy___remoteId',
  PicturePublishedByRemoteTypeName = 'picture___publishedBy___remoteTypeName',
  PicturePublishedByStage = 'picture___publishedBy___stage',
  PicturePublishedByUpdatedAt = 'picture___publishedBy___updatedAt',
  PictureRemoteId = 'picture___remoteId',
  PictureRemoteTypeName = 'picture___remoteTypeName',
  PictureSeoImage = 'picture___seoImage',
  PictureSeoImageChildren = 'picture___seoImage___children',
  PictureSeoImageChildrenChildren = 'picture___seoImage___children___children',
  PictureSeoImageChildrenId = 'picture___seoImage___children___id',
  PictureSeoImageCreatedAt = 'picture___seoImage___createdAt',
  PictureSeoImageCreatedByChildren = 'picture___seoImage___createdBy___children',
  PictureSeoImageCreatedByCreatedAt = 'picture___seoImage___createdBy___createdAt',
  PictureSeoImageCreatedById = 'picture___seoImage___createdBy___id',
  PictureSeoImageCreatedByIsActive = 'picture___seoImage___createdBy___isActive',
  PictureSeoImageCreatedByKind = 'picture___seoImage___createdBy___kind',
  PictureSeoImageCreatedByName = 'picture___seoImage___createdBy___name',
  PictureSeoImageCreatedByPicture = 'picture___seoImage___createdBy___picture',
  PictureSeoImageCreatedByPublishedAt = 'picture___seoImage___createdBy___publishedAt',
  PictureSeoImageCreatedByRemoteId = 'picture___seoImage___createdBy___remoteId',
  PictureSeoImageCreatedByRemoteTypeName = 'picture___seoImage___createdBy___remoteTypeName',
  PictureSeoImageCreatedByStage = 'picture___seoImage___createdBy___stage',
  PictureSeoImageCreatedByUpdatedAt = 'picture___seoImage___createdBy___updatedAt',
  PictureSeoImageDescription = 'picture___seoImage___description',
  PictureSeoImageId = 'picture___seoImage___id',
  PictureSeoImageImageAuthorAvatar = 'picture___seoImage___image___authorAvatar',
  PictureSeoImageImageChildren = 'picture___seoImage___image___children',
  PictureSeoImageImageCoverImagePost = 'picture___seoImage___image___coverImagePost',
  PictureSeoImageImageCreatedAt = 'picture___seoImage___image___createdAt',
  PictureSeoImageImageFileName = 'picture___seoImage___image___fileName',
  PictureSeoImageImageHandle = 'picture___seoImage___image___handle',
  PictureSeoImageImageHeight = 'picture___seoImage___image___height',
  PictureSeoImageImageId = 'picture___seoImage___image___id',
  PictureSeoImageImageLocale = 'picture___seoImage___image___locale',
  PictureSeoImageImageMimeType = 'picture___seoImage___image___mimeType',
  PictureSeoImageImagePublishedAt = 'picture___seoImage___image___publishedAt',
  PictureSeoImageImageRemoteId = 'picture___seoImage___image___remoteId',
  PictureSeoImageImageRemoteTypeName = 'picture___seoImage___image___remoteTypeName',
  PictureSeoImageImageSeoImage = 'picture___seoImage___image___seoImage',
  PictureSeoImageImageSize = 'picture___seoImage___image___size',
  PictureSeoImageImageStage = 'picture___seoImage___image___stage',
  PictureSeoImageImageUpdatedAt = 'picture___seoImage___image___updatedAt',
  PictureSeoImageImageUrl = 'picture___seoImage___image___url',
  PictureSeoImageImageWidth = 'picture___seoImage___image___width',
  PictureSeoImageInternalContent = 'picture___seoImage___internal___content',
  PictureSeoImageInternalContentDigest = 'picture___seoImage___internal___contentDigest',
  PictureSeoImageInternalDescription = 'picture___seoImage___internal___description',
  PictureSeoImageInternalFieldOwners = 'picture___seoImage___internal___fieldOwners',
  PictureSeoImageInternalIgnoreType = 'picture___seoImage___internal___ignoreType',
  PictureSeoImageInternalMediaType = 'picture___seoImage___internal___mediaType',
  PictureSeoImageInternalOwner = 'picture___seoImage___internal___owner',
  PictureSeoImageInternalType = 'picture___seoImage___internal___type',
  PictureSeoImageKeywords = 'picture___seoImage___keywords',
  PictureSeoImageParentChildren = 'picture___seoImage___parent___children',
  PictureSeoImageParentId = 'picture___seoImage___parent___id',
  PictureSeoImagePublishedAt = 'picture___seoImage___publishedAt',
  PictureSeoImagePublishedByChildren = 'picture___seoImage___publishedBy___children',
  PictureSeoImagePublishedByCreatedAt = 'picture___seoImage___publishedBy___createdAt',
  PictureSeoImagePublishedById = 'picture___seoImage___publishedBy___id',
  PictureSeoImagePublishedByIsActive = 'picture___seoImage___publishedBy___isActive',
  PictureSeoImagePublishedByKind = 'picture___seoImage___publishedBy___kind',
  PictureSeoImagePublishedByName = 'picture___seoImage___publishedBy___name',
  PictureSeoImagePublishedByPicture = 'picture___seoImage___publishedBy___picture',
  PictureSeoImagePublishedByPublishedAt = 'picture___seoImage___publishedBy___publishedAt',
  PictureSeoImagePublishedByRemoteId = 'picture___seoImage___publishedBy___remoteId',
  PictureSeoImagePublishedByRemoteTypeName = 'picture___seoImage___publishedBy___remoteTypeName',
  PictureSeoImagePublishedByStage = 'picture___seoImage___publishedBy___stage',
  PictureSeoImagePublishedByUpdatedAt = 'picture___seoImage___publishedBy___updatedAt',
  PictureSeoImageRemoteId = 'picture___seoImage___remoteId',
  PictureSeoImageRemoteTypeName = 'picture___seoImage___remoteTypeName',
  PictureSeoImageStage = 'picture___seoImage___stage',
  PictureSeoImageTitle = 'picture___seoImage___title',
  PictureSeoImageUpdatedAt = 'picture___seoImage___updatedAt',
  PictureSeoImageUpdatedByChildren = 'picture___seoImage___updatedBy___children',
  PictureSeoImageUpdatedByCreatedAt = 'picture___seoImage___updatedBy___createdAt',
  PictureSeoImageUpdatedById = 'picture___seoImage___updatedBy___id',
  PictureSeoImageUpdatedByIsActive = 'picture___seoImage___updatedBy___isActive',
  PictureSeoImageUpdatedByKind = 'picture___seoImage___updatedBy___kind',
  PictureSeoImageUpdatedByName = 'picture___seoImage___updatedBy___name',
  PictureSeoImageUpdatedByPicture = 'picture___seoImage___updatedBy___picture',
  PictureSeoImageUpdatedByPublishedAt = 'picture___seoImage___updatedBy___publishedAt',
  PictureSeoImageUpdatedByRemoteId = 'picture___seoImage___updatedBy___remoteId',
  PictureSeoImageUpdatedByRemoteTypeName = 'picture___seoImage___updatedBy___remoteTypeName',
  PictureSeoImageUpdatedByStage = 'picture___seoImage___updatedBy___stage',
  PictureSeoImageUpdatedByUpdatedAt = 'picture___seoImage___updatedBy___updatedAt',
  PictureSize = 'picture___size',
  PictureStage = 'picture___stage',
  PictureUpdatedAt = 'picture___updatedAt',
  PictureUpdatedByChildren = 'picture___updatedBy___children',
  PictureUpdatedByChildrenChildren = 'picture___updatedBy___children___children',
  PictureUpdatedByChildrenId = 'picture___updatedBy___children___id',
  PictureUpdatedByCreatedAt = 'picture___updatedBy___createdAt',
  PictureUpdatedById = 'picture___updatedBy___id',
  PictureUpdatedByInternalContent = 'picture___updatedBy___internal___content',
  PictureUpdatedByInternalContentDigest = 'picture___updatedBy___internal___contentDigest',
  PictureUpdatedByInternalDescription = 'picture___updatedBy___internal___description',
  PictureUpdatedByInternalFieldOwners = 'picture___updatedBy___internal___fieldOwners',
  PictureUpdatedByInternalIgnoreType = 'picture___updatedBy___internal___ignoreType',
  PictureUpdatedByInternalMediaType = 'picture___updatedBy___internal___mediaType',
  PictureUpdatedByInternalOwner = 'picture___updatedBy___internal___owner',
  PictureUpdatedByInternalType = 'picture___updatedBy___internal___type',
  PictureUpdatedByIsActive = 'picture___updatedBy___isActive',
  PictureUpdatedByKind = 'picture___updatedBy___kind',
  PictureUpdatedByName = 'picture___updatedBy___name',
  PictureUpdatedByParentChildren = 'picture___updatedBy___parent___children',
  PictureUpdatedByParentId = 'picture___updatedBy___parent___id',
  PictureUpdatedByPicture = 'picture___updatedBy___picture',
  PictureUpdatedByPublishedAt = 'picture___updatedBy___publishedAt',
  PictureUpdatedByRemoteId = 'picture___updatedBy___remoteId',
  PictureUpdatedByRemoteTypeName = 'picture___updatedBy___remoteTypeName',
  PictureUpdatedByStage = 'picture___updatedBy___stage',
  PictureUpdatedByUpdatedAt = 'picture___updatedBy___updatedAt',
  PictureUrl = 'picture___url',
  PictureWidth = 'picture___width',
  Posts = 'posts',
  PostsAuthorBiography = 'posts___author___biography',
  PostsAuthorChildren = 'posts___author___children',
  PostsAuthorChildrenChildren = 'posts___author___children___children',
  PostsAuthorChildrenId = 'posts___author___children___id',
  PostsAuthorCreatedAt = 'posts___author___createdAt',
  PostsAuthorCreatedByChildren = 'posts___author___createdBy___children',
  PostsAuthorCreatedByCreatedAt = 'posts___author___createdBy___createdAt',
  PostsAuthorCreatedById = 'posts___author___createdBy___id',
  PostsAuthorCreatedByIsActive = 'posts___author___createdBy___isActive',
  PostsAuthorCreatedByKind = 'posts___author___createdBy___kind',
  PostsAuthorCreatedByName = 'posts___author___createdBy___name',
  PostsAuthorCreatedByPicture = 'posts___author___createdBy___picture',
  PostsAuthorCreatedByPublishedAt = 'posts___author___createdBy___publishedAt',
  PostsAuthorCreatedByRemoteId = 'posts___author___createdBy___remoteId',
  PostsAuthorCreatedByRemoteTypeName = 'posts___author___createdBy___remoteTypeName',
  PostsAuthorCreatedByStage = 'posts___author___createdBy___stage',
  PostsAuthorCreatedByUpdatedAt = 'posts___author___createdBy___updatedAt',
  PostsAuthorId = 'posts___author___id',
  PostsAuthorInternalContent = 'posts___author___internal___content',
  PostsAuthorInternalContentDigest = 'posts___author___internal___contentDigest',
  PostsAuthorInternalDescription = 'posts___author___internal___description',
  PostsAuthorInternalFieldOwners = 'posts___author___internal___fieldOwners',
  PostsAuthorInternalIgnoreType = 'posts___author___internal___ignoreType',
  PostsAuthorInternalMediaType = 'posts___author___internal___mediaType',
  PostsAuthorInternalOwner = 'posts___author___internal___owner',
  PostsAuthorInternalType = 'posts___author___internal___type',
  PostsAuthorName = 'posts___author___name',
  PostsAuthorParentChildren = 'posts___author___parent___children',
  PostsAuthorParentId = 'posts___author___parent___id',
  PostsAuthorPictureAuthorAvatar = 'posts___author___picture___authorAvatar',
  PostsAuthorPictureChildren = 'posts___author___picture___children',
  PostsAuthorPictureCoverImagePost = 'posts___author___picture___coverImagePost',
  PostsAuthorPictureCreatedAt = 'posts___author___picture___createdAt',
  PostsAuthorPictureFileName = 'posts___author___picture___fileName',
  PostsAuthorPictureHandle = 'posts___author___picture___handle',
  PostsAuthorPictureHeight = 'posts___author___picture___height',
  PostsAuthorPictureId = 'posts___author___picture___id',
  PostsAuthorPictureLocale = 'posts___author___picture___locale',
  PostsAuthorPictureMimeType = 'posts___author___picture___mimeType',
  PostsAuthorPicturePublishedAt = 'posts___author___picture___publishedAt',
  PostsAuthorPictureRemoteId = 'posts___author___picture___remoteId',
  PostsAuthorPictureRemoteTypeName = 'posts___author___picture___remoteTypeName',
  PostsAuthorPictureSeoImage = 'posts___author___picture___seoImage',
  PostsAuthorPictureSize = 'posts___author___picture___size',
  PostsAuthorPictureStage = 'posts___author___picture___stage',
  PostsAuthorPictureUpdatedAt = 'posts___author___picture___updatedAt',
  PostsAuthorPictureUrl = 'posts___author___picture___url',
  PostsAuthorPictureWidth = 'posts___author___picture___width',
  PostsAuthorPosts = 'posts___author___posts',
  PostsAuthorPostsChildren = 'posts___author___posts___children',
  PostsAuthorPostsCreatedAt = 'posts___author___posts___createdAt',
  PostsAuthorPostsDate = 'posts___author___posts___date',
  PostsAuthorPostsExcerpt = 'posts___author___posts___excerpt',
  PostsAuthorPostsId = 'posts___author___posts___id',
  PostsAuthorPostsPublishedAt = 'posts___author___posts___publishedAt',
  PostsAuthorPostsRemoteId = 'posts___author___posts___remoteId',
  PostsAuthorPostsRemoteTypeName = 'posts___author___posts___remoteTypeName',
  PostsAuthorPostsSlug = 'posts___author___posts___slug',
  PostsAuthorPostsStage = 'posts___author___posts___stage',
  PostsAuthorPostsTags = 'posts___author___posts___tags',
  PostsAuthorPostsTitle = 'posts___author___posts___title',
  PostsAuthorPostsUpdatedAt = 'posts___author___posts___updatedAt',
  PostsAuthorPublishedAt = 'posts___author___publishedAt',
  PostsAuthorPublishedByChildren = 'posts___author___publishedBy___children',
  PostsAuthorPublishedByCreatedAt = 'posts___author___publishedBy___createdAt',
  PostsAuthorPublishedById = 'posts___author___publishedBy___id',
  PostsAuthorPublishedByIsActive = 'posts___author___publishedBy___isActive',
  PostsAuthorPublishedByKind = 'posts___author___publishedBy___kind',
  PostsAuthorPublishedByName = 'posts___author___publishedBy___name',
  PostsAuthorPublishedByPicture = 'posts___author___publishedBy___picture',
  PostsAuthorPublishedByPublishedAt = 'posts___author___publishedBy___publishedAt',
  PostsAuthorPublishedByRemoteId = 'posts___author___publishedBy___remoteId',
  PostsAuthorPublishedByRemoteTypeName = 'posts___author___publishedBy___remoteTypeName',
  PostsAuthorPublishedByStage = 'posts___author___publishedBy___stage',
  PostsAuthorPublishedByUpdatedAt = 'posts___author___publishedBy___updatedAt',
  PostsAuthorRemoteId = 'posts___author___remoteId',
  PostsAuthorRemoteTypeName = 'posts___author___remoteTypeName',
  PostsAuthorStage = 'posts___author___stage',
  PostsAuthorTitle = 'posts___author___title',
  PostsAuthorUpdatedAt = 'posts___author___updatedAt',
  PostsAuthorUpdatedByChildren = 'posts___author___updatedBy___children',
  PostsAuthorUpdatedByCreatedAt = 'posts___author___updatedBy___createdAt',
  PostsAuthorUpdatedById = 'posts___author___updatedBy___id',
  PostsAuthorUpdatedByIsActive = 'posts___author___updatedBy___isActive',
  PostsAuthorUpdatedByKind = 'posts___author___updatedBy___kind',
  PostsAuthorUpdatedByName = 'posts___author___updatedBy___name',
  PostsAuthorUpdatedByPicture = 'posts___author___updatedBy___picture',
  PostsAuthorUpdatedByPublishedAt = 'posts___author___updatedBy___publishedAt',
  PostsAuthorUpdatedByRemoteId = 'posts___author___updatedBy___remoteId',
  PostsAuthorUpdatedByRemoteTypeName = 'posts___author___updatedBy___remoteTypeName',
  PostsAuthorUpdatedByStage = 'posts___author___updatedBy___stage',
  PostsAuthorUpdatedByUpdatedAt = 'posts___author___updatedBy___updatedAt',
  PostsChildren = 'posts___children',
  PostsChildrenChildren = 'posts___children___children',
  PostsChildrenChildrenChildren = 'posts___children___children___children',
  PostsChildrenChildrenId = 'posts___children___children___id',
  PostsChildrenId = 'posts___children___id',
  PostsChildrenInternalContent = 'posts___children___internal___content',
  PostsChildrenInternalContentDigest = 'posts___children___internal___contentDigest',
  PostsChildrenInternalDescription = 'posts___children___internal___description',
  PostsChildrenInternalFieldOwners = 'posts___children___internal___fieldOwners',
  PostsChildrenInternalIgnoreType = 'posts___children___internal___ignoreType',
  PostsChildrenInternalMediaType = 'posts___children___internal___mediaType',
  PostsChildrenInternalOwner = 'posts___children___internal___owner',
  PostsChildrenInternalType = 'posts___children___internal___type',
  PostsChildrenParentChildren = 'posts___children___parent___children',
  PostsChildrenParentId = 'posts___children___parent___id',
  PostsContentHtml = 'posts___content___html',
  PostsContentMarkdown = 'posts___content___markdown',
  PostsContentRaw = 'posts___content___raw',
  PostsContentRemoteTypeName = 'posts___content___remoteTypeName',
  PostsContentText = 'posts___content___text',
  PostsCoverImageAuthorAvatar = 'posts___coverImage___authorAvatar',
  PostsCoverImageAuthorAvatarBiography = 'posts___coverImage___authorAvatar___biography',
  PostsCoverImageAuthorAvatarChildren = 'posts___coverImage___authorAvatar___children',
  PostsCoverImageAuthorAvatarCreatedAt = 'posts___coverImage___authorAvatar___createdAt',
  PostsCoverImageAuthorAvatarId = 'posts___coverImage___authorAvatar___id',
  PostsCoverImageAuthorAvatarName = 'posts___coverImage___authorAvatar___name',
  PostsCoverImageAuthorAvatarPosts = 'posts___coverImage___authorAvatar___posts',
  PostsCoverImageAuthorAvatarPublishedAt = 'posts___coverImage___authorAvatar___publishedAt',
  PostsCoverImageAuthorAvatarRemoteId = 'posts___coverImage___authorAvatar___remoteId',
  PostsCoverImageAuthorAvatarRemoteTypeName = 'posts___coverImage___authorAvatar___remoteTypeName',
  PostsCoverImageAuthorAvatarStage = 'posts___coverImage___authorAvatar___stage',
  PostsCoverImageAuthorAvatarTitle = 'posts___coverImage___authorAvatar___title',
  PostsCoverImageAuthorAvatarUpdatedAt = 'posts___coverImage___authorAvatar___updatedAt',
  PostsCoverImageChildren = 'posts___coverImage___children',
  PostsCoverImageChildrenChildren = 'posts___coverImage___children___children',
  PostsCoverImageChildrenId = 'posts___coverImage___children___id',
  PostsCoverImageCoverImagePost = 'posts___coverImage___coverImagePost',
  PostsCoverImageCoverImagePostChildren = 'posts___coverImage___coverImagePost___children',
  PostsCoverImageCoverImagePostCreatedAt = 'posts___coverImage___coverImagePost___createdAt',
  PostsCoverImageCoverImagePostDate = 'posts___coverImage___coverImagePost___date',
  PostsCoverImageCoverImagePostExcerpt = 'posts___coverImage___coverImagePost___excerpt',
  PostsCoverImageCoverImagePostId = 'posts___coverImage___coverImagePost___id',
  PostsCoverImageCoverImagePostPublishedAt = 'posts___coverImage___coverImagePost___publishedAt',
  PostsCoverImageCoverImagePostRemoteId = 'posts___coverImage___coverImagePost___remoteId',
  PostsCoverImageCoverImagePostRemoteTypeName = 'posts___coverImage___coverImagePost___remoteTypeName',
  PostsCoverImageCoverImagePostSlug = 'posts___coverImage___coverImagePost___slug',
  PostsCoverImageCoverImagePostStage = 'posts___coverImage___coverImagePost___stage',
  PostsCoverImageCoverImagePostTags = 'posts___coverImage___coverImagePost___tags',
  PostsCoverImageCoverImagePostTitle = 'posts___coverImage___coverImagePost___title',
  PostsCoverImageCoverImagePostUpdatedAt = 'posts___coverImage___coverImagePost___updatedAt',
  PostsCoverImageCreatedAt = 'posts___coverImage___createdAt',
  PostsCoverImageCreatedByChildren = 'posts___coverImage___createdBy___children',
  PostsCoverImageCreatedByCreatedAt = 'posts___coverImage___createdBy___createdAt',
  PostsCoverImageCreatedById = 'posts___coverImage___createdBy___id',
  PostsCoverImageCreatedByIsActive = 'posts___coverImage___createdBy___isActive',
  PostsCoverImageCreatedByKind = 'posts___coverImage___createdBy___kind',
  PostsCoverImageCreatedByName = 'posts___coverImage___createdBy___name',
  PostsCoverImageCreatedByPicture = 'posts___coverImage___createdBy___picture',
  PostsCoverImageCreatedByPublishedAt = 'posts___coverImage___createdBy___publishedAt',
  PostsCoverImageCreatedByRemoteId = 'posts___coverImage___createdBy___remoteId',
  PostsCoverImageCreatedByRemoteTypeName = 'posts___coverImage___createdBy___remoteTypeName',
  PostsCoverImageCreatedByStage = 'posts___coverImage___createdBy___stage',
  PostsCoverImageCreatedByUpdatedAt = 'posts___coverImage___createdBy___updatedAt',
  PostsCoverImageFileName = 'posts___coverImage___fileName',
  PostsCoverImageHandle = 'posts___coverImage___handle',
  PostsCoverImageHeight = 'posts___coverImage___height',
  PostsCoverImageId = 'posts___coverImage___id',
  PostsCoverImageInternalContent = 'posts___coverImage___internal___content',
  PostsCoverImageInternalContentDigest = 'posts___coverImage___internal___contentDigest',
  PostsCoverImageInternalDescription = 'posts___coverImage___internal___description',
  PostsCoverImageInternalFieldOwners = 'posts___coverImage___internal___fieldOwners',
  PostsCoverImageInternalIgnoreType = 'posts___coverImage___internal___ignoreType',
  PostsCoverImageInternalMediaType = 'posts___coverImage___internal___mediaType',
  PostsCoverImageInternalOwner = 'posts___coverImage___internal___owner',
  PostsCoverImageInternalType = 'posts___coverImage___internal___type',
  PostsCoverImageLocale = 'posts___coverImage___locale',
  PostsCoverImageMimeType = 'posts___coverImage___mimeType',
  PostsCoverImageParentChildren = 'posts___coverImage___parent___children',
  PostsCoverImageParentId = 'posts___coverImage___parent___id',
  PostsCoverImagePublishedAt = 'posts___coverImage___publishedAt',
  PostsCoverImagePublishedByChildren = 'posts___coverImage___publishedBy___children',
  PostsCoverImagePublishedByCreatedAt = 'posts___coverImage___publishedBy___createdAt',
  PostsCoverImagePublishedById = 'posts___coverImage___publishedBy___id',
  PostsCoverImagePublishedByIsActive = 'posts___coverImage___publishedBy___isActive',
  PostsCoverImagePublishedByKind = 'posts___coverImage___publishedBy___kind',
  PostsCoverImagePublishedByName = 'posts___coverImage___publishedBy___name',
  PostsCoverImagePublishedByPicture = 'posts___coverImage___publishedBy___picture',
  PostsCoverImagePublishedByPublishedAt = 'posts___coverImage___publishedBy___publishedAt',
  PostsCoverImagePublishedByRemoteId = 'posts___coverImage___publishedBy___remoteId',
  PostsCoverImagePublishedByRemoteTypeName = 'posts___coverImage___publishedBy___remoteTypeName',
  PostsCoverImagePublishedByStage = 'posts___coverImage___publishedBy___stage',
  PostsCoverImagePublishedByUpdatedAt = 'posts___coverImage___publishedBy___updatedAt',
  PostsCoverImageRemoteId = 'posts___coverImage___remoteId',
  PostsCoverImageRemoteTypeName = 'posts___coverImage___remoteTypeName',
  PostsCoverImageSeoImage = 'posts___coverImage___seoImage',
  PostsCoverImageSeoImageChildren = 'posts___coverImage___seoImage___children',
  PostsCoverImageSeoImageCreatedAt = 'posts___coverImage___seoImage___createdAt',
  PostsCoverImageSeoImageDescription = 'posts___coverImage___seoImage___description',
  PostsCoverImageSeoImageId = 'posts___coverImage___seoImage___id',
  PostsCoverImageSeoImageKeywords = 'posts___coverImage___seoImage___keywords',
  PostsCoverImageSeoImagePublishedAt = 'posts___coverImage___seoImage___publishedAt',
  PostsCoverImageSeoImageRemoteId = 'posts___coverImage___seoImage___remoteId',
  PostsCoverImageSeoImageRemoteTypeName = 'posts___coverImage___seoImage___remoteTypeName',
  PostsCoverImageSeoImageStage = 'posts___coverImage___seoImage___stage',
  PostsCoverImageSeoImageTitle = 'posts___coverImage___seoImage___title',
  PostsCoverImageSeoImageUpdatedAt = 'posts___coverImage___seoImage___updatedAt',
  PostsCoverImageSize = 'posts___coverImage___size',
  PostsCoverImageStage = 'posts___coverImage___stage',
  PostsCoverImageUpdatedAt = 'posts___coverImage___updatedAt',
  PostsCoverImageUpdatedByChildren = 'posts___coverImage___updatedBy___children',
  PostsCoverImageUpdatedByCreatedAt = 'posts___coverImage___updatedBy___createdAt',
  PostsCoverImageUpdatedById = 'posts___coverImage___updatedBy___id',
  PostsCoverImageUpdatedByIsActive = 'posts___coverImage___updatedBy___isActive',
  PostsCoverImageUpdatedByKind = 'posts___coverImage___updatedBy___kind',
  PostsCoverImageUpdatedByName = 'posts___coverImage___updatedBy___name',
  PostsCoverImageUpdatedByPicture = 'posts___coverImage___updatedBy___picture',
  PostsCoverImageUpdatedByPublishedAt = 'posts___coverImage___updatedBy___publishedAt',
  PostsCoverImageUpdatedByRemoteId = 'posts___coverImage___updatedBy___remoteId',
  PostsCoverImageUpdatedByRemoteTypeName = 'posts___coverImage___updatedBy___remoteTypeName',
  PostsCoverImageUpdatedByStage = 'posts___coverImage___updatedBy___stage',
  PostsCoverImageUpdatedByUpdatedAt = 'posts___coverImage___updatedBy___updatedAt',
  PostsCoverImageUrl = 'posts___coverImage___url',
  PostsCoverImageWidth = 'posts___coverImage___width',
  PostsCreatedAt = 'posts___createdAt',
  PostsCreatedByChildren = 'posts___createdBy___children',
  PostsCreatedByChildrenChildren = 'posts___createdBy___children___children',
  PostsCreatedByChildrenId = 'posts___createdBy___children___id',
  PostsCreatedByCreatedAt = 'posts___createdBy___createdAt',
  PostsCreatedById = 'posts___createdBy___id',
  PostsCreatedByInternalContent = 'posts___createdBy___internal___content',
  PostsCreatedByInternalContentDigest = 'posts___createdBy___internal___contentDigest',
  PostsCreatedByInternalDescription = 'posts___createdBy___internal___description',
  PostsCreatedByInternalFieldOwners = 'posts___createdBy___internal___fieldOwners',
  PostsCreatedByInternalIgnoreType = 'posts___createdBy___internal___ignoreType',
  PostsCreatedByInternalMediaType = 'posts___createdBy___internal___mediaType',
  PostsCreatedByInternalOwner = 'posts___createdBy___internal___owner',
  PostsCreatedByInternalType = 'posts___createdBy___internal___type',
  PostsCreatedByIsActive = 'posts___createdBy___isActive',
  PostsCreatedByKind = 'posts___createdBy___kind',
  PostsCreatedByName = 'posts___createdBy___name',
  PostsCreatedByParentChildren = 'posts___createdBy___parent___children',
  PostsCreatedByParentId = 'posts___createdBy___parent___id',
  PostsCreatedByPicture = 'posts___createdBy___picture',
  PostsCreatedByPublishedAt = 'posts___createdBy___publishedAt',
  PostsCreatedByRemoteId = 'posts___createdBy___remoteId',
  PostsCreatedByRemoteTypeName = 'posts___createdBy___remoteTypeName',
  PostsCreatedByStage = 'posts___createdBy___stage',
  PostsCreatedByUpdatedAt = 'posts___createdBy___updatedAt',
  PostsDate = 'posts___date',
  PostsExcerpt = 'posts___excerpt',
  PostsId = 'posts___id',
  PostsInternalContent = 'posts___internal___content',
  PostsInternalContentDigest = 'posts___internal___contentDigest',
  PostsInternalDescription = 'posts___internal___description',
  PostsInternalFieldOwners = 'posts___internal___fieldOwners',
  PostsInternalIgnoreType = 'posts___internal___ignoreType',
  PostsInternalMediaType = 'posts___internal___mediaType',
  PostsInternalOwner = 'posts___internal___owner',
  PostsInternalType = 'posts___internal___type',
  PostsParentChildren = 'posts___parent___children',
  PostsParentChildrenChildren = 'posts___parent___children___children',
  PostsParentChildrenId = 'posts___parent___children___id',
  PostsParentId = 'posts___parent___id',
  PostsParentInternalContent = 'posts___parent___internal___content',
  PostsParentInternalContentDigest = 'posts___parent___internal___contentDigest',
  PostsParentInternalDescription = 'posts___parent___internal___description',
  PostsParentInternalFieldOwners = 'posts___parent___internal___fieldOwners',
  PostsParentInternalIgnoreType = 'posts___parent___internal___ignoreType',
  PostsParentInternalMediaType = 'posts___parent___internal___mediaType',
  PostsParentInternalOwner = 'posts___parent___internal___owner',
  PostsParentInternalType = 'posts___parent___internal___type',
  PostsParentParentChildren = 'posts___parent___parent___children',
  PostsParentParentId = 'posts___parent___parent___id',
  PostsPublishedAt = 'posts___publishedAt',
  PostsPublishedByChildren = 'posts___publishedBy___children',
  PostsPublishedByChildrenChildren = 'posts___publishedBy___children___children',
  PostsPublishedByChildrenId = 'posts___publishedBy___children___id',
  PostsPublishedByCreatedAt = 'posts___publishedBy___createdAt',
  PostsPublishedById = 'posts___publishedBy___id',
  PostsPublishedByInternalContent = 'posts___publishedBy___internal___content',
  PostsPublishedByInternalContentDigest = 'posts___publishedBy___internal___contentDigest',
  PostsPublishedByInternalDescription = 'posts___publishedBy___internal___description',
  PostsPublishedByInternalFieldOwners = 'posts___publishedBy___internal___fieldOwners',
  PostsPublishedByInternalIgnoreType = 'posts___publishedBy___internal___ignoreType',
  PostsPublishedByInternalMediaType = 'posts___publishedBy___internal___mediaType',
  PostsPublishedByInternalOwner = 'posts___publishedBy___internal___owner',
  PostsPublishedByInternalType = 'posts___publishedBy___internal___type',
  PostsPublishedByIsActive = 'posts___publishedBy___isActive',
  PostsPublishedByKind = 'posts___publishedBy___kind',
  PostsPublishedByName = 'posts___publishedBy___name',
  PostsPublishedByParentChildren = 'posts___publishedBy___parent___children',
  PostsPublishedByParentId = 'posts___publishedBy___parent___id',
  PostsPublishedByPicture = 'posts___publishedBy___picture',
  PostsPublishedByPublishedAt = 'posts___publishedBy___publishedAt',
  PostsPublishedByRemoteId = 'posts___publishedBy___remoteId',
  PostsPublishedByRemoteTypeName = 'posts___publishedBy___remoteTypeName',
  PostsPublishedByStage = 'posts___publishedBy___stage',
  PostsPublishedByUpdatedAt = 'posts___publishedBy___updatedAt',
  PostsRemoteId = 'posts___remoteId',
  PostsRemoteTypeName = 'posts___remoteTypeName',
  PostsSeoChildren = 'posts___seo___children',
  PostsSeoChildrenChildren = 'posts___seo___children___children',
  PostsSeoChildrenId = 'posts___seo___children___id',
  PostsSeoCreatedAt = 'posts___seo___createdAt',
  PostsSeoCreatedByChildren = 'posts___seo___createdBy___children',
  PostsSeoCreatedByCreatedAt = 'posts___seo___createdBy___createdAt',
  PostsSeoCreatedById = 'posts___seo___createdBy___id',
  PostsSeoCreatedByIsActive = 'posts___seo___createdBy___isActive',
  PostsSeoCreatedByKind = 'posts___seo___createdBy___kind',
  PostsSeoCreatedByName = 'posts___seo___createdBy___name',
  PostsSeoCreatedByPicture = 'posts___seo___createdBy___picture',
  PostsSeoCreatedByPublishedAt = 'posts___seo___createdBy___publishedAt',
  PostsSeoCreatedByRemoteId = 'posts___seo___createdBy___remoteId',
  PostsSeoCreatedByRemoteTypeName = 'posts___seo___createdBy___remoteTypeName',
  PostsSeoCreatedByStage = 'posts___seo___createdBy___stage',
  PostsSeoCreatedByUpdatedAt = 'posts___seo___createdBy___updatedAt',
  PostsSeoDescription = 'posts___seo___description',
  PostsSeoId = 'posts___seo___id',
  PostsSeoImageAuthorAvatar = 'posts___seo___image___authorAvatar',
  PostsSeoImageChildren = 'posts___seo___image___children',
  PostsSeoImageCoverImagePost = 'posts___seo___image___coverImagePost',
  PostsSeoImageCreatedAt = 'posts___seo___image___createdAt',
  PostsSeoImageFileName = 'posts___seo___image___fileName',
  PostsSeoImageHandle = 'posts___seo___image___handle',
  PostsSeoImageHeight = 'posts___seo___image___height',
  PostsSeoImageId = 'posts___seo___image___id',
  PostsSeoImageLocale = 'posts___seo___image___locale',
  PostsSeoImageMimeType = 'posts___seo___image___mimeType',
  PostsSeoImagePublishedAt = 'posts___seo___image___publishedAt',
  PostsSeoImageRemoteId = 'posts___seo___image___remoteId',
  PostsSeoImageRemoteTypeName = 'posts___seo___image___remoteTypeName',
  PostsSeoImageSeoImage = 'posts___seo___image___seoImage',
  PostsSeoImageSize = 'posts___seo___image___size',
  PostsSeoImageStage = 'posts___seo___image___stage',
  PostsSeoImageUpdatedAt = 'posts___seo___image___updatedAt',
  PostsSeoImageUrl = 'posts___seo___image___url',
  PostsSeoImageWidth = 'posts___seo___image___width',
  PostsSeoInternalContent = 'posts___seo___internal___content',
  PostsSeoInternalContentDigest = 'posts___seo___internal___contentDigest',
  PostsSeoInternalDescription = 'posts___seo___internal___description',
  PostsSeoInternalFieldOwners = 'posts___seo___internal___fieldOwners',
  PostsSeoInternalIgnoreType = 'posts___seo___internal___ignoreType',
  PostsSeoInternalMediaType = 'posts___seo___internal___mediaType',
  PostsSeoInternalOwner = 'posts___seo___internal___owner',
  PostsSeoInternalType = 'posts___seo___internal___type',
  PostsSeoKeywords = 'posts___seo___keywords',
  PostsSeoParentChildren = 'posts___seo___parent___children',
  PostsSeoParentId = 'posts___seo___parent___id',
  PostsSeoPublishedAt = 'posts___seo___publishedAt',
  PostsSeoPublishedByChildren = 'posts___seo___publishedBy___children',
  PostsSeoPublishedByCreatedAt = 'posts___seo___publishedBy___createdAt',
  PostsSeoPublishedById = 'posts___seo___publishedBy___id',
  PostsSeoPublishedByIsActive = 'posts___seo___publishedBy___isActive',
  PostsSeoPublishedByKind = 'posts___seo___publishedBy___kind',
  PostsSeoPublishedByName = 'posts___seo___publishedBy___name',
  PostsSeoPublishedByPicture = 'posts___seo___publishedBy___picture',
  PostsSeoPublishedByPublishedAt = 'posts___seo___publishedBy___publishedAt',
  PostsSeoPublishedByRemoteId = 'posts___seo___publishedBy___remoteId',
  PostsSeoPublishedByRemoteTypeName = 'posts___seo___publishedBy___remoteTypeName',
  PostsSeoPublishedByStage = 'posts___seo___publishedBy___stage',
  PostsSeoPublishedByUpdatedAt = 'posts___seo___publishedBy___updatedAt',
  PostsSeoRemoteId = 'posts___seo___remoteId',
  PostsSeoRemoteTypeName = 'posts___seo___remoteTypeName',
  PostsSeoStage = 'posts___seo___stage',
  PostsSeoTitle = 'posts___seo___title',
  PostsSeoUpdatedAt = 'posts___seo___updatedAt',
  PostsSeoUpdatedByChildren = 'posts___seo___updatedBy___children',
  PostsSeoUpdatedByCreatedAt = 'posts___seo___updatedBy___createdAt',
  PostsSeoUpdatedById = 'posts___seo___updatedBy___id',
  PostsSeoUpdatedByIsActive = 'posts___seo___updatedBy___isActive',
  PostsSeoUpdatedByKind = 'posts___seo___updatedBy___kind',
  PostsSeoUpdatedByName = 'posts___seo___updatedBy___name',
  PostsSeoUpdatedByPicture = 'posts___seo___updatedBy___picture',
  PostsSeoUpdatedByPublishedAt = 'posts___seo___updatedBy___publishedAt',
  PostsSeoUpdatedByRemoteId = 'posts___seo___updatedBy___remoteId',
  PostsSeoUpdatedByRemoteTypeName = 'posts___seo___updatedBy___remoteTypeName',
  PostsSeoUpdatedByStage = 'posts___seo___updatedBy___stage',
  PostsSeoUpdatedByUpdatedAt = 'posts___seo___updatedBy___updatedAt',
  PostsSlug = 'posts___slug',
  PostsStage = 'posts___stage',
  PostsTags = 'posts___tags',
  PostsTitle = 'posts___title',
  PostsUpdatedAt = 'posts___updatedAt',
  PostsUpdatedByChildren = 'posts___updatedBy___children',
  PostsUpdatedByChildrenChildren = 'posts___updatedBy___children___children',
  PostsUpdatedByChildrenId = 'posts___updatedBy___children___id',
  PostsUpdatedByCreatedAt = 'posts___updatedBy___createdAt',
  PostsUpdatedById = 'posts___updatedBy___id',
  PostsUpdatedByInternalContent = 'posts___updatedBy___internal___content',
  PostsUpdatedByInternalContentDigest = 'posts___updatedBy___internal___contentDigest',
  PostsUpdatedByInternalDescription = 'posts___updatedBy___internal___description',
  PostsUpdatedByInternalFieldOwners = 'posts___updatedBy___internal___fieldOwners',
  PostsUpdatedByInternalIgnoreType = 'posts___updatedBy___internal___ignoreType',
  PostsUpdatedByInternalMediaType = 'posts___updatedBy___internal___mediaType',
  PostsUpdatedByInternalOwner = 'posts___updatedBy___internal___owner',
  PostsUpdatedByInternalType = 'posts___updatedBy___internal___type',
  PostsUpdatedByIsActive = 'posts___updatedBy___isActive',
  PostsUpdatedByKind = 'posts___updatedBy___kind',
  PostsUpdatedByName = 'posts___updatedBy___name',
  PostsUpdatedByParentChildren = 'posts___updatedBy___parent___children',
  PostsUpdatedByParentId = 'posts___updatedBy___parent___id',
  PostsUpdatedByPicture = 'posts___updatedBy___picture',
  PostsUpdatedByPublishedAt = 'posts___updatedBy___publishedAt',
  PostsUpdatedByRemoteId = 'posts___updatedBy___remoteId',
  PostsUpdatedByRemoteTypeName = 'posts___updatedBy___remoteTypeName',
  PostsUpdatedByStage = 'posts___updatedBy___stage',
  PostsUpdatedByUpdatedAt = 'posts___updatedBy___updatedAt',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt'
}

export type GraphCms_AuthorFilterInput = {
  biography: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  picture: Maybe<GraphCms_AssetFilterInput>;
  posts: Maybe<GraphCms_PostFilterListInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};

export type GraphCms_AuthorFilterListInput = {
  elemMatch: Maybe<GraphCms_AuthorFilterInput>;
};

export type GraphCms_AuthorGroupConnection = {
  edges: Array<GraphCms_AuthorEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_Author>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphCms_AuthorSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_AuthorFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum GraphCms_Locale {
  En = 'en'
}

export type GraphCms_LocaleQueryOperatorInput = {
  eq: Maybe<GraphCms_Locale>;
  in: Maybe<Array<Maybe<GraphCms_Locale>>>;
  ne: Maybe<GraphCms_Locale>;
  nin: Maybe<Array<Maybe<GraphCms_Locale>>>;
};

export type GraphCms_Page = Node & {
  children: Array<Node>;
  content: GraphCms_RichText;
  createdAt: Scalars['JSON'];
  createdBy: Maybe<GraphCms_User>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  publishedAt: Maybe<Scalars['JSON']>;
  publishedBy: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  seo: Maybe<GraphCms_Seo>;
  slug: Scalars['String'];
  stage: GraphCms_Stage;
  subtitle: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['JSON'];
  updatedBy: Maybe<GraphCms_User>;
};

export type GraphCms_PageConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_PageEdge>;
  group: Array<GraphCms_PageGroupConnection>;
  nodes: Array<GraphCms_Page>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_PageConnectionDistinctArgs = {
  field: GraphCms_PageFieldsEnum;
};


export type GraphCms_PageConnectionGroupArgs = {
  field: GraphCms_PageFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_PageEdge = {
  next: Maybe<GraphCms_Page>;
  node: GraphCms_Page;
  previous: Maybe<GraphCms_Page>;
};

export enum GraphCms_PageFieldsEnum {
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
  ContentHtml = 'content___html',
  ContentMarkdown = 'content___markdown',
  ContentRaw = 'content___raw',
  ContentRemoteTypeName = 'content___remoteTypeName',
  ContentText = 'content___text',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
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
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  SeoChildren = 'seo___children',
  SeoChildrenChildren = 'seo___children___children',
  SeoChildrenChildrenChildren = 'seo___children___children___children',
  SeoChildrenChildrenId = 'seo___children___children___id',
  SeoChildrenId = 'seo___children___id',
  SeoChildrenInternalContent = 'seo___children___internal___content',
  SeoChildrenInternalContentDigest = 'seo___children___internal___contentDigest',
  SeoChildrenInternalDescription = 'seo___children___internal___description',
  SeoChildrenInternalFieldOwners = 'seo___children___internal___fieldOwners',
  SeoChildrenInternalIgnoreType = 'seo___children___internal___ignoreType',
  SeoChildrenInternalMediaType = 'seo___children___internal___mediaType',
  SeoChildrenInternalOwner = 'seo___children___internal___owner',
  SeoChildrenInternalType = 'seo___children___internal___type',
  SeoChildrenParentChildren = 'seo___children___parent___children',
  SeoChildrenParentId = 'seo___children___parent___id',
  SeoCreatedAt = 'seo___createdAt',
  SeoCreatedByChildren = 'seo___createdBy___children',
  SeoCreatedByChildrenChildren = 'seo___createdBy___children___children',
  SeoCreatedByChildrenId = 'seo___createdBy___children___id',
  SeoCreatedByCreatedAt = 'seo___createdBy___createdAt',
  SeoCreatedById = 'seo___createdBy___id',
  SeoCreatedByInternalContent = 'seo___createdBy___internal___content',
  SeoCreatedByInternalContentDigest = 'seo___createdBy___internal___contentDigest',
  SeoCreatedByInternalDescription = 'seo___createdBy___internal___description',
  SeoCreatedByInternalFieldOwners = 'seo___createdBy___internal___fieldOwners',
  SeoCreatedByInternalIgnoreType = 'seo___createdBy___internal___ignoreType',
  SeoCreatedByInternalMediaType = 'seo___createdBy___internal___mediaType',
  SeoCreatedByInternalOwner = 'seo___createdBy___internal___owner',
  SeoCreatedByInternalType = 'seo___createdBy___internal___type',
  SeoCreatedByIsActive = 'seo___createdBy___isActive',
  SeoCreatedByKind = 'seo___createdBy___kind',
  SeoCreatedByName = 'seo___createdBy___name',
  SeoCreatedByParentChildren = 'seo___createdBy___parent___children',
  SeoCreatedByParentId = 'seo___createdBy___parent___id',
  SeoCreatedByPicture = 'seo___createdBy___picture',
  SeoCreatedByPublishedAt = 'seo___createdBy___publishedAt',
  SeoCreatedByRemoteId = 'seo___createdBy___remoteId',
  SeoCreatedByRemoteTypeName = 'seo___createdBy___remoteTypeName',
  SeoCreatedByStage = 'seo___createdBy___stage',
  SeoCreatedByUpdatedAt = 'seo___createdBy___updatedAt',
  SeoDescription = 'seo___description',
  SeoId = 'seo___id',
  SeoImageAuthorAvatar = 'seo___image___authorAvatar',
  SeoImageAuthorAvatarBiography = 'seo___image___authorAvatar___biography',
  SeoImageAuthorAvatarChildren = 'seo___image___authorAvatar___children',
  SeoImageAuthorAvatarCreatedAt = 'seo___image___authorAvatar___createdAt',
  SeoImageAuthorAvatarId = 'seo___image___authorAvatar___id',
  SeoImageAuthorAvatarName = 'seo___image___authorAvatar___name',
  SeoImageAuthorAvatarPosts = 'seo___image___authorAvatar___posts',
  SeoImageAuthorAvatarPublishedAt = 'seo___image___authorAvatar___publishedAt',
  SeoImageAuthorAvatarRemoteId = 'seo___image___authorAvatar___remoteId',
  SeoImageAuthorAvatarRemoteTypeName = 'seo___image___authorAvatar___remoteTypeName',
  SeoImageAuthorAvatarStage = 'seo___image___authorAvatar___stage',
  SeoImageAuthorAvatarTitle = 'seo___image___authorAvatar___title',
  SeoImageAuthorAvatarUpdatedAt = 'seo___image___authorAvatar___updatedAt',
  SeoImageChildren = 'seo___image___children',
  SeoImageChildrenChildren = 'seo___image___children___children',
  SeoImageChildrenId = 'seo___image___children___id',
  SeoImageCoverImagePost = 'seo___image___coverImagePost',
  SeoImageCoverImagePostChildren = 'seo___image___coverImagePost___children',
  SeoImageCoverImagePostCreatedAt = 'seo___image___coverImagePost___createdAt',
  SeoImageCoverImagePostDate = 'seo___image___coverImagePost___date',
  SeoImageCoverImagePostExcerpt = 'seo___image___coverImagePost___excerpt',
  SeoImageCoverImagePostId = 'seo___image___coverImagePost___id',
  SeoImageCoverImagePostPublishedAt = 'seo___image___coverImagePost___publishedAt',
  SeoImageCoverImagePostRemoteId = 'seo___image___coverImagePost___remoteId',
  SeoImageCoverImagePostRemoteTypeName = 'seo___image___coverImagePost___remoteTypeName',
  SeoImageCoverImagePostSlug = 'seo___image___coverImagePost___slug',
  SeoImageCoverImagePostStage = 'seo___image___coverImagePost___stage',
  SeoImageCoverImagePostTags = 'seo___image___coverImagePost___tags',
  SeoImageCoverImagePostTitle = 'seo___image___coverImagePost___title',
  SeoImageCoverImagePostUpdatedAt = 'seo___image___coverImagePost___updatedAt',
  SeoImageCreatedAt = 'seo___image___createdAt',
  SeoImageCreatedByChildren = 'seo___image___createdBy___children',
  SeoImageCreatedByCreatedAt = 'seo___image___createdBy___createdAt',
  SeoImageCreatedById = 'seo___image___createdBy___id',
  SeoImageCreatedByIsActive = 'seo___image___createdBy___isActive',
  SeoImageCreatedByKind = 'seo___image___createdBy___kind',
  SeoImageCreatedByName = 'seo___image___createdBy___name',
  SeoImageCreatedByPicture = 'seo___image___createdBy___picture',
  SeoImageCreatedByPublishedAt = 'seo___image___createdBy___publishedAt',
  SeoImageCreatedByRemoteId = 'seo___image___createdBy___remoteId',
  SeoImageCreatedByRemoteTypeName = 'seo___image___createdBy___remoteTypeName',
  SeoImageCreatedByStage = 'seo___image___createdBy___stage',
  SeoImageCreatedByUpdatedAt = 'seo___image___createdBy___updatedAt',
  SeoImageFileName = 'seo___image___fileName',
  SeoImageHandle = 'seo___image___handle',
  SeoImageHeight = 'seo___image___height',
  SeoImageId = 'seo___image___id',
  SeoImageInternalContent = 'seo___image___internal___content',
  SeoImageInternalContentDigest = 'seo___image___internal___contentDigest',
  SeoImageInternalDescription = 'seo___image___internal___description',
  SeoImageInternalFieldOwners = 'seo___image___internal___fieldOwners',
  SeoImageInternalIgnoreType = 'seo___image___internal___ignoreType',
  SeoImageInternalMediaType = 'seo___image___internal___mediaType',
  SeoImageInternalOwner = 'seo___image___internal___owner',
  SeoImageInternalType = 'seo___image___internal___type',
  SeoImageLocale = 'seo___image___locale',
  SeoImageMimeType = 'seo___image___mimeType',
  SeoImageParentChildren = 'seo___image___parent___children',
  SeoImageParentId = 'seo___image___parent___id',
  SeoImagePublishedAt = 'seo___image___publishedAt',
  SeoImagePublishedByChildren = 'seo___image___publishedBy___children',
  SeoImagePublishedByCreatedAt = 'seo___image___publishedBy___createdAt',
  SeoImagePublishedById = 'seo___image___publishedBy___id',
  SeoImagePublishedByIsActive = 'seo___image___publishedBy___isActive',
  SeoImagePublishedByKind = 'seo___image___publishedBy___kind',
  SeoImagePublishedByName = 'seo___image___publishedBy___name',
  SeoImagePublishedByPicture = 'seo___image___publishedBy___picture',
  SeoImagePublishedByPublishedAt = 'seo___image___publishedBy___publishedAt',
  SeoImagePublishedByRemoteId = 'seo___image___publishedBy___remoteId',
  SeoImagePublishedByRemoteTypeName = 'seo___image___publishedBy___remoteTypeName',
  SeoImagePublishedByStage = 'seo___image___publishedBy___stage',
  SeoImagePublishedByUpdatedAt = 'seo___image___publishedBy___updatedAt',
  SeoImageRemoteId = 'seo___image___remoteId',
  SeoImageRemoteTypeName = 'seo___image___remoteTypeName',
  SeoImageSeoImage = 'seo___image___seoImage',
  SeoImageSeoImageChildren = 'seo___image___seoImage___children',
  SeoImageSeoImageCreatedAt = 'seo___image___seoImage___createdAt',
  SeoImageSeoImageDescription = 'seo___image___seoImage___description',
  SeoImageSeoImageId = 'seo___image___seoImage___id',
  SeoImageSeoImageKeywords = 'seo___image___seoImage___keywords',
  SeoImageSeoImagePublishedAt = 'seo___image___seoImage___publishedAt',
  SeoImageSeoImageRemoteId = 'seo___image___seoImage___remoteId',
  SeoImageSeoImageRemoteTypeName = 'seo___image___seoImage___remoteTypeName',
  SeoImageSeoImageStage = 'seo___image___seoImage___stage',
  SeoImageSeoImageTitle = 'seo___image___seoImage___title',
  SeoImageSeoImageUpdatedAt = 'seo___image___seoImage___updatedAt',
  SeoImageSize = 'seo___image___size',
  SeoImageStage = 'seo___image___stage',
  SeoImageUpdatedAt = 'seo___image___updatedAt',
  SeoImageUpdatedByChildren = 'seo___image___updatedBy___children',
  SeoImageUpdatedByCreatedAt = 'seo___image___updatedBy___createdAt',
  SeoImageUpdatedById = 'seo___image___updatedBy___id',
  SeoImageUpdatedByIsActive = 'seo___image___updatedBy___isActive',
  SeoImageUpdatedByKind = 'seo___image___updatedBy___kind',
  SeoImageUpdatedByName = 'seo___image___updatedBy___name',
  SeoImageUpdatedByPicture = 'seo___image___updatedBy___picture',
  SeoImageUpdatedByPublishedAt = 'seo___image___updatedBy___publishedAt',
  SeoImageUpdatedByRemoteId = 'seo___image___updatedBy___remoteId',
  SeoImageUpdatedByRemoteTypeName = 'seo___image___updatedBy___remoteTypeName',
  SeoImageUpdatedByStage = 'seo___image___updatedBy___stage',
  SeoImageUpdatedByUpdatedAt = 'seo___image___updatedBy___updatedAt',
  SeoImageUrl = 'seo___image___url',
  SeoImageWidth = 'seo___image___width',
  SeoInternalContent = 'seo___internal___content',
  SeoInternalContentDigest = 'seo___internal___contentDigest',
  SeoInternalDescription = 'seo___internal___description',
  SeoInternalFieldOwners = 'seo___internal___fieldOwners',
  SeoInternalIgnoreType = 'seo___internal___ignoreType',
  SeoInternalMediaType = 'seo___internal___mediaType',
  SeoInternalOwner = 'seo___internal___owner',
  SeoInternalType = 'seo___internal___type',
  SeoKeywords = 'seo___keywords',
  SeoParentChildren = 'seo___parent___children',
  SeoParentChildrenChildren = 'seo___parent___children___children',
  SeoParentChildrenId = 'seo___parent___children___id',
  SeoParentId = 'seo___parent___id',
  SeoParentInternalContent = 'seo___parent___internal___content',
  SeoParentInternalContentDigest = 'seo___parent___internal___contentDigest',
  SeoParentInternalDescription = 'seo___parent___internal___description',
  SeoParentInternalFieldOwners = 'seo___parent___internal___fieldOwners',
  SeoParentInternalIgnoreType = 'seo___parent___internal___ignoreType',
  SeoParentInternalMediaType = 'seo___parent___internal___mediaType',
  SeoParentInternalOwner = 'seo___parent___internal___owner',
  SeoParentInternalType = 'seo___parent___internal___type',
  SeoParentParentChildren = 'seo___parent___parent___children',
  SeoParentParentId = 'seo___parent___parent___id',
  SeoPublishedAt = 'seo___publishedAt',
  SeoPublishedByChildren = 'seo___publishedBy___children',
  SeoPublishedByChildrenChildren = 'seo___publishedBy___children___children',
  SeoPublishedByChildrenId = 'seo___publishedBy___children___id',
  SeoPublishedByCreatedAt = 'seo___publishedBy___createdAt',
  SeoPublishedById = 'seo___publishedBy___id',
  SeoPublishedByInternalContent = 'seo___publishedBy___internal___content',
  SeoPublishedByInternalContentDigest = 'seo___publishedBy___internal___contentDigest',
  SeoPublishedByInternalDescription = 'seo___publishedBy___internal___description',
  SeoPublishedByInternalFieldOwners = 'seo___publishedBy___internal___fieldOwners',
  SeoPublishedByInternalIgnoreType = 'seo___publishedBy___internal___ignoreType',
  SeoPublishedByInternalMediaType = 'seo___publishedBy___internal___mediaType',
  SeoPublishedByInternalOwner = 'seo___publishedBy___internal___owner',
  SeoPublishedByInternalType = 'seo___publishedBy___internal___type',
  SeoPublishedByIsActive = 'seo___publishedBy___isActive',
  SeoPublishedByKind = 'seo___publishedBy___kind',
  SeoPublishedByName = 'seo___publishedBy___name',
  SeoPublishedByParentChildren = 'seo___publishedBy___parent___children',
  SeoPublishedByParentId = 'seo___publishedBy___parent___id',
  SeoPublishedByPicture = 'seo___publishedBy___picture',
  SeoPublishedByPublishedAt = 'seo___publishedBy___publishedAt',
  SeoPublishedByRemoteId = 'seo___publishedBy___remoteId',
  SeoPublishedByRemoteTypeName = 'seo___publishedBy___remoteTypeName',
  SeoPublishedByStage = 'seo___publishedBy___stage',
  SeoPublishedByUpdatedAt = 'seo___publishedBy___updatedAt',
  SeoRemoteId = 'seo___remoteId',
  SeoRemoteTypeName = 'seo___remoteTypeName',
  SeoStage = 'seo___stage',
  SeoTitle = 'seo___title',
  SeoUpdatedAt = 'seo___updatedAt',
  SeoUpdatedByChildren = 'seo___updatedBy___children',
  SeoUpdatedByChildrenChildren = 'seo___updatedBy___children___children',
  SeoUpdatedByChildrenId = 'seo___updatedBy___children___id',
  SeoUpdatedByCreatedAt = 'seo___updatedBy___createdAt',
  SeoUpdatedById = 'seo___updatedBy___id',
  SeoUpdatedByInternalContent = 'seo___updatedBy___internal___content',
  SeoUpdatedByInternalContentDigest = 'seo___updatedBy___internal___contentDigest',
  SeoUpdatedByInternalDescription = 'seo___updatedBy___internal___description',
  SeoUpdatedByInternalFieldOwners = 'seo___updatedBy___internal___fieldOwners',
  SeoUpdatedByInternalIgnoreType = 'seo___updatedBy___internal___ignoreType',
  SeoUpdatedByInternalMediaType = 'seo___updatedBy___internal___mediaType',
  SeoUpdatedByInternalOwner = 'seo___updatedBy___internal___owner',
  SeoUpdatedByInternalType = 'seo___updatedBy___internal___type',
  SeoUpdatedByIsActive = 'seo___updatedBy___isActive',
  SeoUpdatedByKind = 'seo___updatedBy___kind',
  SeoUpdatedByName = 'seo___updatedBy___name',
  SeoUpdatedByParentChildren = 'seo___updatedBy___parent___children',
  SeoUpdatedByParentId = 'seo___updatedBy___parent___id',
  SeoUpdatedByPicture = 'seo___updatedBy___picture',
  SeoUpdatedByPublishedAt = 'seo___updatedBy___publishedAt',
  SeoUpdatedByRemoteId = 'seo___updatedBy___remoteId',
  SeoUpdatedByRemoteTypeName = 'seo___updatedBy___remoteTypeName',
  SeoUpdatedByStage = 'seo___updatedBy___stage',
  SeoUpdatedByUpdatedAt = 'seo___updatedBy___updatedAt',
  Slug = 'slug',
  Stage = 'stage',
  Subtitle = 'subtitle',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt'
}

export type GraphCms_PageFilterInput = {
  children: Maybe<NodeFilterListInput>;
  content: Maybe<GraphCms_RichTextFilterInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seo: Maybe<GraphCms_SeoFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};

export type GraphCms_PageGroupConnection = {
  edges: Array<GraphCms_PageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_Page>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphCms_PageSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_PageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_Post = Node & {
  author: Maybe<GraphCms_Author>;
  children: Array<Node>;
  content: GraphCms_RichText;
  coverImage: Maybe<GraphCms_Asset>;
  createdAt: Scalars['JSON'];
  createdBy: Maybe<GraphCms_User>;
  date: Scalars['JSON'];
  excerpt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
  publishedAt: Maybe<Scalars['JSON']>;
  publishedBy: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  seo: Maybe<GraphCms_Seo>;
  slug: Scalars['String'];
  stage: GraphCms_Stage;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['JSON'];
  updatedBy: Maybe<GraphCms_User>;
};

export type GraphCms_PostConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_PostEdge>;
  group: Array<GraphCms_PostGroupConnection>;
  nodes: Array<GraphCms_Post>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_PostConnectionDistinctArgs = {
  field: GraphCms_PostFieldsEnum;
};


export type GraphCms_PostConnectionGroupArgs = {
  field: GraphCms_PostFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_PostEdge = {
  next: Maybe<GraphCms_Post>;
  node: GraphCms_Post;
  previous: Maybe<GraphCms_Post>;
};

export enum GraphCms_PostFieldsEnum {
  AuthorBiography = 'author___biography',
  AuthorChildren = 'author___children',
  AuthorChildrenChildren = 'author___children___children',
  AuthorChildrenChildrenChildren = 'author___children___children___children',
  AuthorChildrenChildrenId = 'author___children___children___id',
  AuthorChildrenId = 'author___children___id',
  AuthorChildrenInternalContent = 'author___children___internal___content',
  AuthorChildrenInternalContentDigest = 'author___children___internal___contentDigest',
  AuthorChildrenInternalDescription = 'author___children___internal___description',
  AuthorChildrenInternalFieldOwners = 'author___children___internal___fieldOwners',
  AuthorChildrenInternalIgnoreType = 'author___children___internal___ignoreType',
  AuthorChildrenInternalMediaType = 'author___children___internal___mediaType',
  AuthorChildrenInternalOwner = 'author___children___internal___owner',
  AuthorChildrenInternalType = 'author___children___internal___type',
  AuthorChildrenParentChildren = 'author___children___parent___children',
  AuthorChildrenParentId = 'author___children___parent___id',
  AuthorCreatedAt = 'author___createdAt',
  AuthorCreatedByChildren = 'author___createdBy___children',
  AuthorCreatedByChildrenChildren = 'author___createdBy___children___children',
  AuthorCreatedByChildrenId = 'author___createdBy___children___id',
  AuthorCreatedByCreatedAt = 'author___createdBy___createdAt',
  AuthorCreatedById = 'author___createdBy___id',
  AuthorCreatedByInternalContent = 'author___createdBy___internal___content',
  AuthorCreatedByInternalContentDigest = 'author___createdBy___internal___contentDigest',
  AuthorCreatedByInternalDescription = 'author___createdBy___internal___description',
  AuthorCreatedByInternalFieldOwners = 'author___createdBy___internal___fieldOwners',
  AuthorCreatedByInternalIgnoreType = 'author___createdBy___internal___ignoreType',
  AuthorCreatedByInternalMediaType = 'author___createdBy___internal___mediaType',
  AuthorCreatedByInternalOwner = 'author___createdBy___internal___owner',
  AuthorCreatedByInternalType = 'author___createdBy___internal___type',
  AuthorCreatedByIsActive = 'author___createdBy___isActive',
  AuthorCreatedByKind = 'author___createdBy___kind',
  AuthorCreatedByName = 'author___createdBy___name',
  AuthorCreatedByParentChildren = 'author___createdBy___parent___children',
  AuthorCreatedByParentId = 'author___createdBy___parent___id',
  AuthorCreatedByPicture = 'author___createdBy___picture',
  AuthorCreatedByPublishedAt = 'author___createdBy___publishedAt',
  AuthorCreatedByRemoteId = 'author___createdBy___remoteId',
  AuthorCreatedByRemoteTypeName = 'author___createdBy___remoteTypeName',
  AuthorCreatedByStage = 'author___createdBy___stage',
  AuthorCreatedByUpdatedAt = 'author___createdBy___updatedAt',
  AuthorId = 'author___id',
  AuthorInternalContent = 'author___internal___content',
  AuthorInternalContentDigest = 'author___internal___contentDigest',
  AuthorInternalDescription = 'author___internal___description',
  AuthorInternalFieldOwners = 'author___internal___fieldOwners',
  AuthorInternalIgnoreType = 'author___internal___ignoreType',
  AuthorInternalMediaType = 'author___internal___mediaType',
  AuthorInternalOwner = 'author___internal___owner',
  AuthorInternalType = 'author___internal___type',
  AuthorName = 'author___name',
  AuthorParentChildren = 'author___parent___children',
  AuthorParentChildrenChildren = 'author___parent___children___children',
  AuthorParentChildrenId = 'author___parent___children___id',
  AuthorParentId = 'author___parent___id',
  AuthorParentInternalContent = 'author___parent___internal___content',
  AuthorParentInternalContentDigest = 'author___parent___internal___contentDigest',
  AuthorParentInternalDescription = 'author___parent___internal___description',
  AuthorParentInternalFieldOwners = 'author___parent___internal___fieldOwners',
  AuthorParentInternalIgnoreType = 'author___parent___internal___ignoreType',
  AuthorParentInternalMediaType = 'author___parent___internal___mediaType',
  AuthorParentInternalOwner = 'author___parent___internal___owner',
  AuthorParentInternalType = 'author___parent___internal___type',
  AuthorParentParentChildren = 'author___parent___parent___children',
  AuthorParentParentId = 'author___parent___parent___id',
  AuthorPictureAuthorAvatar = 'author___picture___authorAvatar',
  AuthorPictureAuthorAvatarBiography = 'author___picture___authorAvatar___biography',
  AuthorPictureAuthorAvatarChildren = 'author___picture___authorAvatar___children',
  AuthorPictureAuthorAvatarCreatedAt = 'author___picture___authorAvatar___createdAt',
  AuthorPictureAuthorAvatarId = 'author___picture___authorAvatar___id',
  AuthorPictureAuthorAvatarName = 'author___picture___authorAvatar___name',
  AuthorPictureAuthorAvatarPosts = 'author___picture___authorAvatar___posts',
  AuthorPictureAuthorAvatarPublishedAt = 'author___picture___authorAvatar___publishedAt',
  AuthorPictureAuthorAvatarRemoteId = 'author___picture___authorAvatar___remoteId',
  AuthorPictureAuthorAvatarRemoteTypeName = 'author___picture___authorAvatar___remoteTypeName',
  AuthorPictureAuthorAvatarStage = 'author___picture___authorAvatar___stage',
  AuthorPictureAuthorAvatarTitle = 'author___picture___authorAvatar___title',
  AuthorPictureAuthorAvatarUpdatedAt = 'author___picture___authorAvatar___updatedAt',
  AuthorPictureChildren = 'author___picture___children',
  AuthorPictureChildrenChildren = 'author___picture___children___children',
  AuthorPictureChildrenId = 'author___picture___children___id',
  AuthorPictureCoverImagePost = 'author___picture___coverImagePost',
  AuthorPictureCoverImagePostChildren = 'author___picture___coverImagePost___children',
  AuthorPictureCoverImagePostCreatedAt = 'author___picture___coverImagePost___createdAt',
  AuthorPictureCoverImagePostDate = 'author___picture___coverImagePost___date',
  AuthorPictureCoverImagePostExcerpt = 'author___picture___coverImagePost___excerpt',
  AuthorPictureCoverImagePostId = 'author___picture___coverImagePost___id',
  AuthorPictureCoverImagePostPublishedAt = 'author___picture___coverImagePost___publishedAt',
  AuthorPictureCoverImagePostRemoteId = 'author___picture___coverImagePost___remoteId',
  AuthorPictureCoverImagePostRemoteTypeName = 'author___picture___coverImagePost___remoteTypeName',
  AuthorPictureCoverImagePostSlug = 'author___picture___coverImagePost___slug',
  AuthorPictureCoverImagePostStage = 'author___picture___coverImagePost___stage',
  AuthorPictureCoverImagePostTags = 'author___picture___coverImagePost___tags',
  AuthorPictureCoverImagePostTitle = 'author___picture___coverImagePost___title',
  AuthorPictureCoverImagePostUpdatedAt = 'author___picture___coverImagePost___updatedAt',
  AuthorPictureCreatedAt = 'author___picture___createdAt',
  AuthorPictureCreatedByChildren = 'author___picture___createdBy___children',
  AuthorPictureCreatedByCreatedAt = 'author___picture___createdBy___createdAt',
  AuthorPictureCreatedById = 'author___picture___createdBy___id',
  AuthorPictureCreatedByIsActive = 'author___picture___createdBy___isActive',
  AuthorPictureCreatedByKind = 'author___picture___createdBy___kind',
  AuthorPictureCreatedByName = 'author___picture___createdBy___name',
  AuthorPictureCreatedByPicture = 'author___picture___createdBy___picture',
  AuthorPictureCreatedByPublishedAt = 'author___picture___createdBy___publishedAt',
  AuthorPictureCreatedByRemoteId = 'author___picture___createdBy___remoteId',
  AuthorPictureCreatedByRemoteTypeName = 'author___picture___createdBy___remoteTypeName',
  AuthorPictureCreatedByStage = 'author___picture___createdBy___stage',
  AuthorPictureCreatedByUpdatedAt = 'author___picture___createdBy___updatedAt',
  AuthorPictureFileName = 'author___picture___fileName',
  AuthorPictureHandle = 'author___picture___handle',
  AuthorPictureHeight = 'author___picture___height',
  AuthorPictureId = 'author___picture___id',
  AuthorPictureInternalContent = 'author___picture___internal___content',
  AuthorPictureInternalContentDigest = 'author___picture___internal___contentDigest',
  AuthorPictureInternalDescription = 'author___picture___internal___description',
  AuthorPictureInternalFieldOwners = 'author___picture___internal___fieldOwners',
  AuthorPictureInternalIgnoreType = 'author___picture___internal___ignoreType',
  AuthorPictureInternalMediaType = 'author___picture___internal___mediaType',
  AuthorPictureInternalOwner = 'author___picture___internal___owner',
  AuthorPictureInternalType = 'author___picture___internal___type',
  AuthorPictureLocale = 'author___picture___locale',
  AuthorPictureMimeType = 'author___picture___mimeType',
  AuthorPictureParentChildren = 'author___picture___parent___children',
  AuthorPictureParentId = 'author___picture___parent___id',
  AuthorPicturePublishedAt = 'author___picture___publishedAt',
  AuthorPicturePublishedByChildren = 'author___picture___publishedBy___children',
  AuthorPicturePublishedByCreatedAt = 'author___picture___publishedBy___createdAt',
  AuthorPicturePublishedById = 'author___picture___publishedBy___id',
  AuthorPicturePublishedByIsActive = 'author___picture___publishedBy___isActive',
  AuthorPicturePublishedByKind = 'author___picture___publishedBy___kind',
  AuthorPicturePublishedByName = 'author___picture___publishedBy___name',
  AuthorPicturePublishedByPicture = 'author___picture___publishedBy___picture',
  AuthorPicturePublishedByPublishedAt = 'author___picture___publishedBy___publishedAt',
  AuthorPicturePublishedByRemoteId = 'author___picture___publishedBy___remoteId',
  AuthorPicturePublishedByRemoteTypeName = 'author___picture___publishedBy___remoteTypeName',
  AuthorPicturePublishedByStage = 'author___picture___publishedBy___stage',
  AuthorPicturePublishedByUpdatedAt = 'author___picture___publishedBy___updatedAt',
  AuthorPictureRemoteId = 'author___picture___remoteId',
  AuthorPictureRemoteTypeName = 'author___picture___remoteTypeName',
  AuthorPictureSeoImage = 'author___picture___seoImage',
  AuthorPictureSeoImageChildren = 'author___picture___seoImage___children',
  AuthorPictureSeoImageCreatedAt = 'author___picture___seoImage___createdAt',
  AuthorPictureSeoImageDescription = 'author___picture___seoImage___description',
  AuthorPictureSeoImageId = 'author___picture___seoImage___id',
  AuthorPictureSeoImageKeywords = 'author___picture___seoImage___keywords',
  AuthorPictureSeoImagePublishedAt = 'author___picture___seoImage___publishedAt',
  AuthorPictureSeoImageRemoteId = 'author___picture___seoImage___remoteId',
  AuthorPictureSeoImageRemoteTypeName = 'author___picture___seoImage___remoteTypeName',
  AuthorPictureSeoImageStage = 'author___picture___seoImage___stage',
  AuthorPictureSeoImageTitle = 'author___picture___seoImage___title',
  AuthorPictureSeoImageUpdatedAt = 'author___picture___seoImage___updatedAt',
  AuthorPictureSize = 'author___picture___size',
  AuthorPictureStage = 'author___picture___stage',
  AuthorPictureUpdatedAt = 'author___picture___updatedAt',
  AuthorPictureUpdatedByChildren = 'author___picture___updatedBy___children',
  AuthorPictureUpdatedByCreatedAt = 'author___picture___updatedBy___createdAt',
  AuthorPictureUpdatedById = 'author___picture___updatedBy___id',
  AuthorPictureUpdatedByIsActive = 'author___picture___updatedBy___isActive',
  AuthorPictureUpdatedByKind = 'author___picture___updatedBy___kind',
  AuthorPictureUpdatedByName = 'author___picture___updatedBy___name',
  AuthorPictureUpdatedByPicture = 'author___picture___updatedBy___picture',
  AuthorPictureUpdatedByPublishedAt = 'author___picture___updatedBy___publishedAt',
  AuthorPictureUpdatedByRemoteId = 'author___picture___updatedBy___remoteId',
  AuthorPictureUpdatedByRemoteTypeName = 'author___picture___updatedBy___remoteTypeName',
  AuthorPictureUpdatedByStage = 'author___picture___updatedBy___stage',
  AuthorPictureUpdatedByUpdatedAt = 'author___picture___updatedBy___updatedAt',
  AuthorPictureUrl = 'author___picture___url',
  AuthorPictureWidth = 'author___picture___width',
  AuthorPosts = 'author___posts',
  AuthorPostsAuthorBiography = 'author___posts___author___biography',
  AuthorPostsAuthorChildren = 'author___posts___author___children',
  AuthorPostsAuthorCreatedAt = 'author___posts___author___createdAt',
  AuthorPostsAuthorId = 'author___posts___author___id',
  AuthorPostsAuthorName = 'author___posts___author___name',
  AuthorPostsAuthorPosts = 'author___posts___author___posts',
  AuthorPostsAuthorPublishedAt = 'author___posts___author___publishedAt',
  AuthorPostsAuthorRemoteId = 'author___posts___author___remoteId',
  AuthorPostsAuthorRemoteTypeName = 'author___posts___author___remoteTypeName',
  AuthorPostsAuthorStage = 'author___posts___author___stage',
  AuthorPostsAuthorTitle = 'author___posts___author___title',
  AuthorPostsAuthorUpdatedAt = 'author___posts___author___updatedAt',
  AuthorPostsChildren = 'author___posts___children',
  AuthorPostsChildrenChildren = 'author___posts___children___children',
  AuthorPostsChildrenId = 'author___posts___children___id',
  AuthorPostsContentHtml = 'author___posts___content___html',
  AuthorPostsContentMarkdown = 'author___posts___content___markdown',
  AuthorPostsContentRaw = 'author___posts___content___raw',
  AuthorPostsContentRemoteTypeName = 'author___posts___content___remoteTypeName',
  AuthorPostsContentText = 'author___posts___content___text',
  AuthorPostsCoverImageAuthorAvatar = 'author___posts___coverImage___authorAvatar',
  AuthorPostsCoverImageChildren = 'author___posts___coverImage___children',
  AuthorPostsCoverImageCoverImagePost = 'author___posts___coverImage___coverImagePost',
  AuthorPostsCoverImageCreatedAt = 'author___posts___coverImage___createdAt',
  AuthorPostsCoverImageFileName = 'author___posts___coverImage___fileName',
  AuthorPostsCoverImageHandle = 'author___posts___coverImage___handle',
  AuthorPostsCoverImageHeight = 'author___posts___coverImage___height',
  AuthorPostsCoverImageId = 'author___posts___coverImage___id',
  AuthorPostsCoverImageLocale = 'author___posts___coverImage___locale',
  AuthorPostsCoverImageMimeType = 'author___posts___coverImage___mimeType',
  AuthorPostsCoverImagePublishedAt = 'author___posts___coverImage___publishedAt',
  AuthorPostsCoverImageRemoteId = 'author___posts___coverImage___remoteId',
  AuthorPostsCoverImageRemoteTypeName = 'author___posts___coverImage___remoteTypeName',
  AuthorPostsCoverImageSeoImage = 'author___posts___coverImage___seoImage',
  AuthorPostsCoverImageSize = 'author___posts___coverImage___size',
  AuthorPostsCoverImageStage = 'author___posts___coverImage___stage',
  AuthorPostsCoverImageUpdatedAt = 'author___posts___coverImage___updatedAt',
  AuthorPostsCoverImageUrl = 'author___posts___coverImage___url',
  AuthorPostsCoverImageWidth = 'author___posts___coverImage___width',
  AuthorPostsCreatedAt = 'author___posts___createdAt',
  AuthorPostsCreatedByChildren = 'author___posts___createdBy___children',
  AuthorPostsCreatedByCreatedAt = 'author___posts___createdBy___createdAt',
  AuthorPostsCreatedById = 'author___posts___createdBy___id',
  AuthorPostsCreatedByIsActive = 'author___posts___createdBy___isActive',
  AuthorPostsCreatedByKind = 'author___posts___createdBy___kind',
  AuthorPostsCreatedByName = 'author___posts___createdBy___name',
  AuthorPostsCreatedByPicture = 'author___posts___createdBy___picture',
  AuthorPostsCreatedByPublishedAt = 'author___posts___createdBy___publishedAt',
  AuthorPostsCreatedByRemoteId = 'author___posts___createdBy___remoteId',
  AuthorPostsCreatedByRemoteTypeName = 'author___posts___createdBy___remoteTypeName',
  AuthorPostsCreatedByStage = 'author___posts___createdBy___stage',
  AuthorPostsCreatedByUpdatedAt = 'author___posts___createdBy___updatedAt',
  AuthorPostsDate = 'author___posts___date',
  AuthorPostsExcerpt = 'author___posts___excerpt',
  AuthorPostsId = 'author___posts___id',
  AuthorPostsInternalContent = 'author___posts___internal___content',
  AuthorPostsInternalContentDigest = 'author___posts___internal___contentDigest',
  AuthorPostsInternalDescription = 'author___posts___internal___description',
  AuthorPostsInternalFieldOwners = 'author___posts___internal___fieldOwners',
  AuthorPostsInternalIgnoreType = 'author___posts___internal___ignoreType',
  AuthorPostsInternalMediaType = 'author___posts___internal___mediaType',
  AuthorPostsInternalOwner = 'author___posts___internal___owner',
  AuthorPostsInternalType = 'author___posts___internal___type',
  AuthorPostsParentChildren = 'author___posts___parent___children',
  AuthorPostsParentId = 'author___posts___parent___id',
  AuthorPostsPublishedAt = 'author___posts___publishedAt',
  AuthorPostsPublishedByChildren = 'author___posts___publishedBy___children',
  AuthorPostsPublishedByCreatedAt = 'author___posts___publishedBy___createdAt',
  AuthorPostsPublishedById = 'author___posts___publishedBy___id',
  AuthorPostsPublishedByIsActive = 'author___posts___publishedBy___isActive',
  AuthorPostsPublishedByKind = 'author___posts___publishedBy___kind',
  AuthorPostsPublishedByName = 'author___posts___publishedBy___name',
  AuthorPostsPublishedByPicture = 'author___posts___publishedBy___picture',
  AuthorPostsPublishedByPublishedAt = 'author___posts___publishedBy___publishedAt',
  AuthorPostsPublishedByRemoteId = 'author___posts___publishedBy___remoteId',
  AuthorPostsPublishedByRemoteTypeName = 'author___posts___publishedBy___remoteTypeName',
  AuthorPostsPublishedByStage = 'author___posts___publishedBy___stage',
  AuthorPostsPublishedByUpdatedAt = 'author___posts___publishedBy___updatedAt',
  AuthorPostsRemoteId = 'author___posts___remoteId',
  AuthorPostsRemoteTypeName = 'author___posts___remoteTypeName',
  AuthorPostsSeoChildren = 'author___posts___seo___children',
  AuthorPostsSeoCreatedAt = 'author___posts___seo___createdAt',
  AuthorPostsSeoDescription = 'author___posts___seo___description',
  AuthorPostsSeoId = 'author___posts___seo___id',
  AuthorPostsSeoKeywords = 'author___posts___seo___keywords',
  AuthorPostsSeoPublishedAt = 'author___posts___seo___publishedAt',
  AuthorPostsSeoRemoteId = 'author___posts___seo___remoteId',
  AuthorPostsSeoRemoteTypeName = 'author___posts___seo___remoteTypeName',
  AuthorPostsSeoStage = 'author___posts___seo___stage',
  AuthorPostsSeoTitle = 'author___posts___seo___title',
  AuthorPostsSeoUpdatedAt = 'author___posts___seo___updatedAt',
  AuthorPostsSlug = 'author___posts___slug',
  AuthorPostsStage = 'author___posts___stage',
  AuthorPostsTags = 'author___posts___tags',
  AuthorPostsTitle = 'author___posts___title',
  AuthorPostsUpdatedAt = 'author___posts___updatedAt',
  AuthorPostsUpdatedByChildren = 'author___posts___updatedBy___children',
  AuthorPostsUpdatedByCreatedAt = 'author___posts___updatedBy___createdAt',
  AuthorPostsUpdatedById = 'author___posts___updatedBy___id',
  AuthorPostsUpdatedByIsActive = 'author___posts___updatedBy___isActive',
  AuthorPostsUpdatedByKind = 'author___posts___updatedBy___kind',
  AuthorPostsUpdatedByName = 'author___posts___updatedBy___name',
  AuthorPostsUpdatedByPicture = 'author___posts___updatedBy___picture',
  AuthorPostsUpdatedByPublishedAt = 'author___posts___updatedBy___publishedAt',
  AuthorPostsUpdatedByRemoteId = 'author___posts___updatedBy___remoteId',
  AuthorPostsUpdatedByRemoteTypeName = 'author___posts___updatedBy___remoteTypeName',
  AuthorPostsUpdatedByStage = 'author___posts___updatedBy___stage',
  AuthorPostsUpdatedByUpdatedAt = 'author___posts___updatedBy___updatedAt',
  AuthorPublishedAt = 'author___publishedAt',
  AuthorPublishedByChildren = 'author___publishedBy___children',
  AuthorPublishedByChildrenChildren = 'author___publishedBy___children___children',
  AuthorPublishedByChildrenId = 'author___publishedBy___children___id',
  AuthorPublishedByCreatedAt = 'author___publishedBy___createdAt',
  AuthorPublishedById = 'author___publishedBy___id',
  AuthorPublishedByInternalContent = 'author___publishedBy___internal___content',
  AuthorPublishedByInternalContentDigest = 'author___publishedBy___internal___contentDigest',
  AuthorPublishedByInternalDescription = 'author___publishedBy___internal___description',
  AuthorPublishedByInternalFieldOwners = 'author___publishedBy___internal___fieldOwners',
  AuthorPublishedByInternalIgnoreType = 'author___publishedBy___internal___ignoreType',
  AuthorPublishedByInternalMediaType = 'author___publishedBy___internal___mediaType',
  AuthorPublishedByInternalOwner = 'author___publishedBy___internal___owner',
  AuthorPublishedByInternalType = 'author___publishedBy___internal___type',
  AuthorPublishedByIsActive = 'author___publishedBy___isActive',
  AuthorPublishedByKind = 'author___publishedBy___kind',
  AuthorPublishedByName = 'author___publishedBy___name',
  AuthorPublishedByParentChildren = 'author___publishedBy___parent___children',
  AuthorPublishedByParentId = 'author___publishedBy___parent___id',
  AuthorPublishedByPicture = 'author___publishedBy___picture',
  AuthorPublishedByPublishedAt = 'author___publishedBy___publishedAt',
  AuthorPublishedByRemoteId = 'author___publishedBy___remoteId',
  AuthorPublishedByRemoteTypeName = 'author___publishedBy___remoteTypeName',
  AuthorPublishedByStage = 'author___publishedBy___stage',
  AuthorPublishedByUpdatedAt = 'author___publishedBy___updatedAt',
  AuthorRemoteId = 'author___remoteId',
  AuthorRemoteTypeName = 'author___remoteTypeName',
  AuthorStage = 'author___stage',
  AuthorTitle = 'author___title',
  AuthorUpdatedAt = 'author___updatedAt',
  AuthorUpdatedByChildren = 'author___updatedBy___children',
  AuthorUpdatedByChildrenChildren = 'author___updatedBy___children___children',
  AuthorUpdatedByChildrenId = 'author___updatedBy___children___id',
  AuthorUpdatedByCreatedAt = 'author___updatedBy___createdAt',
  AuthorUpdatedById = 'author___updatedBy___id',
  AuthorUpdatedByInternalContent = 'author___updatedBy___internal___content',
  AuthorUpdatedByInternalContentDigest = 'author___updatedBy___internal___contentDigest',
  AuthorUpdatedByInternalDescription = 'author___updatedBy___internal___description',
  AuthorUpdatedByInternalFieldOwners = 'author___updatedBy___internal___fieldOwners',
  AuthorUpdatedByInternalIgnoreType = 'author___updatedBy___internal___ignoreType',
  AuthorUpdatedByInternalMediaType = 'author___updatedBy___internal___mediaType',
  AuthorUpdatedByInternalOwner = 'author___updatedBy___internal___owner',
  AuthorUpdatedByInternalType = 'author___updatedBy___internal___type',
  AuthorUpdatedByIsActive = 'author___updatedBy___isActive',
  AuthorUpdatedByKind = 'author___updatedBy___kind',
  AuthorUpdatedByName = 'author___updatedBy___name',
  AuthorUpdatedByParentChildren = 'author___updatedBy___parent___children',
  AuthorUpdatedByParentId = 'author___updatedBy___parent___id',
  AuthorUpdatedByPicture = 'author___updatedBy___picture',
  AuthorUpdatedByPublishedAt = 'author___updatedBy___publishedAt',
  AuthorUpdatedByRemoteId = 'author___updatedBy___remoteId',
  AuthorUpdatedByRemoteTypeName = 'author___updatedBy___remoteTypeName',
  AuthorUpdatedByStage = 'author___updatedBy___stage',
  AuthorUpdatedByUpdatedAt = 'author___updatedBy___updatedAt',
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
  ContentHtml = 'content___html',
  ContentMarkdown = 'content___markdown',
  ContentRaw = 'content___raw',
  ContentRemoteTypeName = 'content___remoteTypeName',
  ContentText = 'content___text',
  CoverImageAuthorAvatar = 'coverImage___authorAvatar',
  CoverImageAuthorAvatarBiography = 'coverImage___authorAvatar___biography',
  CoverImageAuthorAvatarChildren = 'coverImage___authorAvatar___children',
  CoverImageAuthorAvatarChildrenChildren = 'coverImage___authorAvatar___children___children',
  CoverImageAuthorAvatarChildrenId = 'coverImage___authorAvatar___children___id',
  CoverImageAuthorAvatarCreatedAt = 'coverImage___authorAvatar___createdAt',
  CoverImageAuthorAvatarCreatedByChildren = 'coverImage___authorAvatar___createdBy___children',
  CoverImageAuthorAvatarCreatedByCreatedAt = 'coverImage___authorAvatar___createdBy___createdAt',
  CoverImageAuthorAvatarCreatedById = 'coverImage___authorAvatar___createdBy___id',
  CoverImageAuthorAvatarCreatedByIsActive = 'coverImage___authorAvatar___createdBy___isActive',
  CoverImageAuthorAvatarCreatedByKind = 'coverImage___authorAvatar___createdBy___kind',
  CoverImageAuthorAvatarCreatedByName = 'coverImage___authorAvatar___createdBy___name',
  CoverImageAuthorAvatarCreatedByPicture = 'coverImage___authorAvatar___createdBy___picture',
  CoverImageAuthorAvatarCreatedByPublishedAt = 'coverImage___authorAvatar___createdBy___publishedAt',
  CoverImageAuthorAvatarCreatedByRemoteId = 'coverImage___authorAvatar___createdBy___remoteId',
  CoverImageAuthorAvatarCreatedByRemoteTypeName = 'coverImage___authorAvatar___createdBy___remoteTypeName',
  CoverImageAuthorAvatarCreatedByStage = 'coverImage___authorAvatar___createdBy___stage',
  CoverImageAuthorAvatarCreatedByUpdatedAt = 'coverImage___authorAvatar___createdBy___updatedAt',
  CoverImageAuthorAvatarId = 'coverImage___authorAvatar___id',
  CoverImageAuthorAvatarInternalContent = 'coverImage___authorAvatar___internal___content',
  CoverImageAuthorAvatarInternalContentDigest = 'coverImage___authorAvatar___internal___contentDigest',
  CoverImageAuthorAvatarInternalDescription = 'coverImage___authorAvatar___internal___description',
  CoverImageAuthorAvatarInternalFieldOwners = 'coverImage___authorAvatar___internal___fieldOwners',
  CoverImageAuthorAvatarInternalIgnoreType = 'coverImage___authorAvatar___internal___ignoreType',
  CoverImageAuthorAvatarInternalMediaType = 'coverImage___authorAvatar___internal___mediaType',
  CoverImageAuthorAvatarInternalOwner = 'coverImage___authorAvatar___internal___owner',
  CoverImageAuthorAvatarInternalType = 'coverImage___authorAvatar___internal___type',
  CoverImageAuthorAvatarName = 'coverImage___authorAvatar___name',
  CoverImageAuthorAvatarParentChildren = 'coverImage___authorAvatar___parent___children',
  CoverImageAuthorAvatarParentId = 'coverImage___authorAvatar___parent___id',
  CoverImageAuthorAvatarPictureAuthorAvatar = 'coverImage___authorAvatar___picture___authorAvatar',
  CoverImageAuthorAvatarPictureChildren = 'coverImage___authorAvatar___picture___children',
  CoverImageAuthorAvatarPictureCoverImagePost = 'coverImage___authorAvatar___picture___coverImagePost',
  CoverImageAuthorAvatarPictureCreatedAt = 'coverImage___authorAvatar___picture___createdAt',
  CoverImageAuthorAvatarPictureFileName = 'coverImage___authorAvatar___picture___fileName',
  CoverImageAuthorAvatarPictureHandle = 'coverImage___authorAvatar___picture___handle',
  CoverImageAuthorAvatarPictureHeight = 'coverImage___authorAvatar___picture___height',
  CoverImageAuthorAvatarPictureId = 'coverImage___authorAvatar___picture___id',
  CoverImageAuthorAvatarPictureLocale = 'coverImage___authorAvatar___picture___locale',
  CoverImageAuthorAvatarPictureMimeType = 'coverImage___authorAvatar___picture___mimeType',
  CoverImageAuthorAvatarPicturePublishedAt = 'coverImage___authorAvatar___picture___publishedAt',
  CoverImageAuthorAvatarPictureRemoteId = 'coverImage___authorAvatar___picture___remoteId',
  CoverImageAuthorAvatarPictureRemoteTypeName = 'coverImage___authorAvatar___picture___remoteTypeName',
  CoverImageAuthorAvatarPictureSeoImage = 'coverImage___authorAvatar___picture___seoImage',
  CoverImageAuthorAvatarPictureSize = 'coverImage___authorAvatar___picture___size',
  CoverImageAuthorAvatarPictureStage = 'coverImage___authorAvatar___picture___stage',
  CoverImageAuthorAvatarPictureUpdatedAt = 'coverImage___authorAvatar___picture___updatedAt',
  CoverImageAuthorAvatarPictureUrl = 'coverImage___authorAvatar___picture___url',
  CoverImageAuthorAvatarPictureWidth = 'coverImage___authorAvatar___picture___width',
  CoverImageAuthorAvatarPosts = 'coverImage___authorAvatar___posts',
  CoverImageAuthorAvatarPostsChildren = 'coverImage___authorAvatar___posts___children',
  CoverImageAuthorAvatarPostsCreatedAt = 'coverImage___authorAvatar___posts___createdAt',
  CoverImageAuthorAvatarPostsDate = 'coverImage___authorAvatar___posts___date',
  CoverImageAuthorAvatarPostsExcerpt = 'coverImage___authorAvatar___posts___excerpt',
  CoverImageAuthorAvatarPostsId = 'coverImage___authorAvatar___posts___id',
  CoverImageAuthorAvatarPostsPublishedAt = 'coverImage___authorAvatar___posts___publishedAt',
  CoverImageAuthorAvatarPostsRemoteId = 'coverImage___authorAvatar___posts___remoteId',
  CoverImageAuthorAvatarPostsRemoteTypeName = 'coverImage___authorAvatar___posts___remoteTypeName',
  CoverImageAuthorAvatarPostsSlug = 'coverImage___authorAvatar___posts___slug',
  CoverImageAuthorAvatarPostsStage = 'coverImage___authorAvatar___posts___stage',
  CoverImageAuthorAvatarPostsTags = 'coverImage___authorAvatar___posts___tags',
  CoverImageAuthorAvatarPostsTitle = 'coverImage___authorAvatar___posts___title',
  CoverImageAuthorAvatarPostsUpdatedAt = 'coverImage___authorAvatar___posts___updatedAt',
  CoverImageAuthorAvatarPublishedAt = 'coverImage___authorAvatar___publishedAt',
  CoverImageAuthorAvatarPublishedByChildren = 'coverImage___authorAvatar___publishedBy___children',
  CoverImageAuthorAvatarPublishedByCreatedAt = 'coverImage___authorAvatar___publishedBy___createdAt',
  CoverImageAuthorAvatarPublishedById = 'coverImage___authorAvatar___publishedBy___id',
  CoverImageAuthorAvatarPublishedByIsActive = 'coverImage___authorAvatar___publishedBy___isActive',
  CoverImageAuthorAvatarPublishedByKind = 'coverImage___authorAvatar___publishedBy___kind',
  CoverImageAuthorAvatarPublishedByName = 'coverImage___authorAvatar___publishedBy___name',
  CoverImageAuthorAvatarPublishedByPicture = 'coverImage___authorAvatar___publishedBy___picture',
  CoverImageAuthorAvatarPublishedByPublishedAt = 'coverImage___authorAvatar___publishedBy___publishedAt',
  CoverImageAuthorAvatarPublishedByRemoteId = 'coverImage___authorAvatar___publishedBy___remoteId',
  CoverImageAuthorAvatarPublishedByRemoteTypeName = 'coverImage___authorAvatar___publishedBy___remoteTypeName',
  CoverImageAuthorAvatarPublishedByStage = 'coverImage___authorAvatar___publishedBy___stage',
  CoverImageAuthorAvatarPublishedByUpdatedAt = 'coverImage___authorAvatar___publishedBy___updatedAt',
  CoverImageAuthorAvatarRemoteId = 'coverImage___authorAvatar___remoteId',
  CoverImageAuthorAvatarRemoteTypeName = 'coverImage___authorAvatar___remoteTypeName',
  CoverImageAuthorAvatarStage = 'coverImage___authorAvatar___stage',
  CoverImageAuthorAvatarTitle = 'coverImage___authorAvatar___title',
  CoverImageAuthorAvatarUpdatedAt = 'coverImage___authorAvatar___updatedAt',
  CoverImageAuthorAvatarUpdatedByChildren = 'coverImage___authorAvatar___updatedBy___children',
  CoverImageAuthorAvatarUpdatedByCreatedAt = 'coverImage___authorAvatar___updatedBy___createdAt',
  CoverImageAuthorAvatarUpdatedById = 'coverImage___authorAvatar___updatedBy___id',
  CoverImageAuthorAvatarUpdatedByIsActive = 'coverImage___authorAvatar___updatedBy___isActive',
  CoverImageAuthorAvatarUpdatedByKind = 'coverImage___authorAvatar___updatedBy___kind',
  CoverImageAuthorAvatarUpdatedByName = 'coverImage___authorAvatar___updatedBy___name',
  CoverImageAuthorAvatarUpdatedByPicture = 'coverImage___authorAvatar___updatedBy___picture',
  CoverImageAuthorAvatarUpdatedByPublishedAt = 'coverImage___authorAvatar___updatedBy___publishedAt',
  CoverImageAuthorAvatarUpdatedByRemoteId = 'coverImage___authorAvatar___updatedBy___remoteId',
  CoverImageAuthorAvatarUpdatedByRemoteTypeName = 'coverImage___authorAvatar___updatedBy___remoteTypeName',
  CoverImageAuthorAvatarUpdatedByStage = 'coverImage___authorAvatar___updatedBy___stage',
  CoverImageAuthorAvatarUpdatedByUpdatedAt = 'coverImage___authorAvatar___updatedBy___updatedAt',
  CoverImageChildren = 'coverImage___children',
  CoverImageChildrenChildren = 'coverImage___children___children',
  CoverImageChildrenChildrenChildren = 'coverImage___children___children___children',
  CoverImageChildrenChildrenId = 'coverImage___children___children___id',
  CoverImageChildrenId = 'coverImage___children___id',
  CoverImageChildrenInternalContent = 'coverImage___children___internal___content',
  CoverImageChildrenInternalContentDigest = 'coverImage___children___internal___contentDigest',
  CoverImageChildrenInternalDescription = 'coverImage___children___internal___description',
  CoverImageChildrenInternalFieldOwners = 'coverImage___children___internal___fieldOwners',
  CoverImageChildrenInternalIgnoreType = 'coverImage___children___internal___ignoreType',
  CoverImageChildrenInternalMediaType = 'coverImage___children___internal___mediaType',
  CoverImageChildrenInternalOwner = 'coverImage___children___internal___owner',
  CoverImageChildrenInternalType = 'coverImage___children___internal___type',
  CoverImageChildrenParentChildren = 'coverImage___children___parent___children',
  CoverImageChildrenParentId = 'coverImage___children___parent___id',
  CoverImageCoverImagePost = 'coverImage___coverImagePost',
  CoverImageCoverImagePostAuthorBiography = 'coverImage___coverImagePost___author___biography',
  CoverImageCoverImagePostAuthorChildren = 'coverImage___coverImagePost___author___children',
  CoverImageCoverImagePostAuthorCreatedAt = 'coverImage___coverImagePost___author___createdAt',
  CoverImageCoverImagePostAuthorId = 'coverImage___coverImagePost___author___id',
  CoverImageCoverImagePostAuthorName = 'coverImage___coverImagePost___author___name',
  CoverImageCoverImagePostAuthorPosts = 'coverImage___coverImagePost___author___posts',
  CoverImageCoverImagePostAuthorPublishedAt = 'coverImage___coverImagePost___author___publishedAt',
  CoverImageCoverImagePostAuthorRemoteId = 'coverImage___coverImagePost___author___remoteId',
  CoverImageCoverImagePostAuthorRemoteTypeName = 'coverImage___coverImagePost___author___remoteTypeName',
  CoverImageCoverImagePostAuthorStage = 'coverImage___coverImagePost___author___stage',
  CoverImageCoverImagePostAuthorTitle = 'coverImage___coverImagePost___author___title',
  CoverImageCoverImagePostAuthorUpdatedAt = 'coverImage___coverImagePost___author___updatedAt',
  CoverImageCoverImagePostChildren = 'coverImage___coverImagePost___children',
  CoverImageCoverImagePostChildrenChildren = 'coverImage___coverImagePost___children___children',
  CoverImageCoverImagePostChildrenId = 'coverImage___coverImagePost___children___id',
  CoverImageCoverImagePostContentHtml = 'coverImage___coverImagePost___content___html',
  CoverImageCoverImagePostContentMarkdown = 'coverImage___coverImagePost___content___markdown',
  CoverImageCoverImagePostContentRaw = 'coverImage___coverImagePost___content___raw',
  CoverImageCoverImagePostContentRemoteTypeName = 'coverImage___coverImagePost___content___remoteTypeName',
  CoverImageCoverImagePostContentText = 'coverImage___coverImagePost___content___text',
  CoverImageCoverImagePostCoverImageAuthorAvatar = 'coverImage___coverImagePost___coverImage___authorAvatar',
  CoverImageCoverImagePostCoverImageChildren = 'coverImage___coverImagePost___coverImage___children',
  CoverImageCoverImagePostCoverImageCoverImagePost = 'coverImage___coverImagePost___coverImage___coverImagePost',
  CoverImageCoverImagePostCoverImageCreatedAt = 'coverImage___coverImagePost___coverImage___createdAt',
  CoverImageCoverImagePostCoverImageFileName = 'coverImage___coverImagePost___coverImage___fileName',
  CoverImageCoverImagePostCoverImageHandle = 'coverImage___coverImagePost___coverImage___handle',
  CoverImageCoverImagePostCoverImageHeight = 'coverImage___coverImagePost___coverImage___height',
  CoverImageCoverImagePostCoverImageId = 'coverImage___coverImagePost___coverImage___id',
  CoverImageCoverImagePostCoverImageLocale = 'coverImage___coverImagePost___coverImage___locale',
  CoverImageCoverImagePostCoverImageMimeType = 'coverImage___coverImagePost___coverImage___mimeType',
  CoverImageCoverImagePostCoverImagePublishedAt = 'coverImage___coverImagePost___coverImage___publishedAt',
  CoverImageCoverImagePostCoverImageRemoteId = 'coverImage___coverImagePost___coverImage___remoteId',
  CoverImageCoverImagePostCoverImageRemoteTypeName = 'coverImage___coverImagePost___coverImage___remoteTypeName',
  CoverImageCoverImagePostCoverImageSeoImage = 'coverImage___coverImagePost___coverImage___seoImage',
  CoverImageCoverImagePostCoverImageSize = 'coverImage___coverImagePost___coverImage___size',
  CoverImageCoverImagePostCoverImageStage = 'coverImage___coverImagePost___coverImage___stage',
  CoverImageCoverImagePostCoverImageUpdatedAt = 'coverImage___coverImagePost___coverImage___updatedAt',
  CoverImageCoverImagePostCoverImageUrl = 'coverImage___coverImagePost___coverImage___url',
  CoverImageCoverImagePostCoverImageWidth = 'coverImage___coverImagePost___coverImage___width',
  CoverImageCoverImagePostCreatedAt = 'coverImage___coverImagePost___createdAt',
  CoverImageCoverImagePostCreatedByChildren = 'coverImage___coverImagePost___createdBy___children',
  CoverImageCoverImagePostCreatedByCreatedAt = 'coverImage___coverImagePost___createdBy___createdAt',
  CoverImageCoverImagePostCreatedById = 'coverImage___coverImagePost___createdBy___id',
  CoverImageCoverImagePostCreatedByIsActive = 'coverImage___coverImagePost___createdBy___isActive',
  CoverImageCoverImagePostCreatedByKind = 'coverImage___coverImagePost___createdBy___kind',
  CoverImageCoverImagePostCreatedByName = 'coverImage___coverImagePost___createdBy___name',
  CoverImageCoverImagePostCreatedByPicture = 'coverImage___coverImagePost___createdBy___picture',
  CoverImageCoverImagePostCreatedByPublishedAt = 'coverImage___coverImagePost___createdBy___publishedAt',
  CoverImageCoverImagePostCreatedByRemoteId = 'coverImage___coverImagePost___createdBy___remoteId',
  CoverImageCoverImagePostCreatedByRemoteTypeName = 'coverImage___coverImagePost___createdBy___remoteTypeName',
  CoverImageCoverImagePostCreatedByStage = 'coverImage___coverImagePost___createdBy___stage',
  CoverImageCoverImagePostCreatedByUpdatedAt = 'coverImage___coverImagePost___createdBy___updatedAt',
  CoverImageCoverImagePostDate = 'coverImage___coverImagePost___date',
  CoverImageCoverImagePostExcerpt = 'coverImage___coverImagePost___excerpt',
  CoverImageCoverImagePostId = 'coverImage___coverImagePost___id',
  CoverImageCoverImagePostInternalContent = 'coverImage___coverImagePost___internal___content',
  CoverImageCoverImagePostInternalContentDigest = 'coverImage___coverImagePost___internal___contentDigest',
  CoverImageCoverImagePostInternalDescription = 'coverImage___coverImagePost___internal___description',
  CoverImageCoverImagePostInternalFieldOwners = 'coverImage___coverImagePost___internal___fieldOwners',
  CoverImageCoverImagePostInternalIgnoreType = 'coverImage___coverImagePost___internal___ignoreType',
  CoverImageCoverImagePostInternalMediaType = 'coverImage___coverImagePost___internal___mediaType',
  CoverImageCoverImagePostInternalOwner = 'coverImage___coverImagePost___internal___owner',
  CoverImageCoverImagePostInternalType = 'coverImage___coverImagePost___internal___type',
  CoverImageCoverImagePostParentChildren = 'coverImage___coverImagePost___parent___children',
  CoverImageCoverImagePostParentId = 'coverImage___coverImagePost___parent___id',
  CoverImageCoverImagePostPublishedAt = 'coverImage___coverImagePost___publishedAt',
  CoverImageCoverImagePostPublishedByChildren = 'coverImage___coverImagePost___publishedBy___children',
  CoverImageCoverImagePostPublishedByCreatedAt = 'coverImage___coverImagePost___publishedBy___createdAt',
  CoverImageCoverImagePostPublishedById = 'coverImage___coverImagePost___publishedBy___id',
  CoverImageCoverImagePostPublishedByIsActive = 'coverImage___coverImagePost___publishedBy___isActive',
  CoverImageCoverImagePostPublishedByKind = 'coverImage___coverImagePost___publishedBy___kind',
  CoverImageCoverImagePostPublishedByName = 'coverImage___coverImagePost___publishedBy___name',
  CoverImageCoverImagePostPublishedByPicture = 'coverImage___coverImagePost___publishedBy___picture',
  CoverImageCoverImagePostPublishedByPublishedAt = 'coverImage___coverImagePost___publishedBy___publishedAt',
  CoverImageCoverImagePostPublishedByRemoteId = 'coverImage___coverImagePost___publishedBy___remoteId',
  CoverImageCoverImagePostPublishedByRemoteTypeName = 'coverImage___coverImagePost___publishedBy___remoteTypeName',
  CoverImageCoverImagePostPublishedByStage = 'coverImage___coverImagePost___publishedBy___stage',
  CoverImageCoverImagePostPublishedByUpdatedAt = 'coverImage___coverImagePost___publishedBy___updatedAt',
  CoverImageCoverImagePostRemoteId = 'coverImage___coverImagePost___remoteId',
  CoverImageCoverImagePostRemoteTypeName = 'coverImage___coverImagePost___remoteTypeName',
  CoverImageCoverImagePostSeoChildren = 'coverImage___coverImagePost___seo___children',
  CoverImageCoverImagePostSeoCreatedAt = 'coverImage___coverImagePost___seo___createdAt',
  CoverImageCoverImagePostSeoDescription = 'coverImage___coverImagePost___seo___description',
  CoverImageCoverImagePostSeoId = 'coverImage___coverImagePost___seo___id',
  CoverImageCoverImagePostSeoKeywords = 'coverImage___coverImagePost___seo___keywords',
  CoverImageCoverImagePostSeoPublishedAt = 'coverImage___coverImagePost___seo___publishedAt',
  CoverImageCoverImagePostSeoRemoteId = 'coverImage___coverImagePost___seo___remoteId',
  CoverImageCoverImagePostSeoRemoteTypeName = 'coverImage___coverImagePost___seo___remoteTypeName',
  CoverImageCoverImagePostSeoStage = 'coverImage___coverImagePost___seo___stage',
  CoverImageCoverImagePostSeoTitle = 'coverImage___coverImagePost___seo___title',
  CoverImageCoverImagePostSeoUpdatedAt = 'coverImage___coverImagePost___seo___updatedAt',
  CoverImageCoverImagePostSlug = 'coverImage___coverImagePost___slug',
  CoverImageCoverImagePostStage = 'coverImage___coverImagePost___stage',
  CoverImageCoverImagePostTags = 'coverImage___coverImagePost___tags',
  CoverImageCoverImagePostTitle = 'coverImage___coverImagePost___title',
  CoverImageCoverImagePostUpdatedAt = 'coverImage___coverImagePost___updatedAt',
  CoverImageCoverImagePostUpdatedByChildren = 'coverImage___coverImagePost___updatedBy___children',
  CoverImageCoverImagePostUpdatedByCreatedAt = 'coverImage___coverImagePost___updatedBy___createdAt',
  CoverImageCoverImagePostUpdatedById = 'coverImage___coverImagePost___updatedBy___id',
  CoverImageCoverImagePostUpdatedByIsActive = 'coverImage___coverImagePost___updatedBy___isActive',
  CoverImageCoverImagePostUpdatedByKind = 'coverImage___coverImagePost___updatedBy___kind',
  CoverImageCoverImagePostUpdatedByName = 'coverImage___coverImagePost___updatedBy___name',
  CoverImageCoverImagePostUpdatedByPicture = 'coverImage___coverImagePost___updatedBy___picture',
  CoverImageCoverImagePostUpdatedByPublishedAt = 'coverImage___coverImagePost___updatedBy___publishedAt',
  CoverImageCoverImagePostUpdatedByRemoteId = 'coverImage___coverImagePost___updatedBy___remoteId',
  CoverImageCoverImagePostUpdatedByRemoteTypeName = 'coverImage___coverImagePost___updatedBy___remoteTypeName',
  CoverImageCoverImagePostUpdatedByStage = 'coverImage___coverImagePost___updatedBy___stage',
  CoverImageCoverImagePostUpdatedByUpdatedAt = 'coverImage___coverImagePost___updatedBy___updatedAt',
  CoverImageCreatedAt = 'coverImage___createdAt',
  CoverImageCreatedByChildren = 'coverImage___createdBy___children',
  CoverImageCreatedByChildrenChildren = 'coverImage___createdBy___children___children',
  CoverImageCreatedByChildrenId = 'coverImage___createdBy___children___id',
  CoverImageCreatedByCreatedAt = 'coverImage___createdBy___createdAt',
  CoverImageCreatedById = 'coverImage___createdBy___id',
  CoverImageCreatedByInternalContent = 'coverImage___createdBy___internal___content',
  CoverImageCreatedByInternalContentDigest = 'coverImage___createdBy___internal___contentDigest',
  CoverImageCreatedByInternalDescription = 'coverImage___createdBy___internal___description',
  CoverImageCreatedByInternalFieldOwners = 'coverImage___createdBy___internal___fieldOwners',
  CoverImageCreatedByInternalIgnoreType = 'coverImage___createdBy___internal___ignoreType',
  CoverImageCreatedByInternalMediaType = 'coverImage___createdBy___internal___mediaType',
  CoverImageCreatedByInternalOwner = 'coverImage___createdBy___internal___owner',
  CoverImageCreatedByInternalType = 'coverImage___createdBy___internal___type',
  CoverImageCreatedByIsActive = 'coverImage___createdBy___isActive',
  CoverImageCreatedByKind = 'coverImage___createdBy___kind',
  CoverImageCreatedByName = 'coverImage___createdBy___name',
  CoverImageCreatedByParentChildren = 'coverImage___createdBy___parent___children',
  CoverImageCreatedByParentId = 'coverImage___createdBy___parent___id',
  CoverImageCreatedByPicture = 'coverImage___createdBy___picture',
  CoverImageCreatedByPublishedAt = 'coverImage___createdBy___publishedAt',
  CoverImageCreatedByRemoteId = 'coverImage___createdBy___remoteId',
  CoverImageCreatedByRemoteTypeName = 'coverImage___createdBy___remoteTypeName',
  CoverImageCreatedByStage = 'coverImage___createdBy___stage',
  CoverImageCreatedByUpdatedAt = 'coverImage___createdBy___updatedAt',
  CoverImageFileName = 'coverImage___fileName',
  CoverImageHandle = 'coverImage___handle',
  CoverImageHeight = 'coverImage___height',
  CoverImageId = 'coverImage___id',
  CoverImageInternalContent = 'coverImage___internal___content',
  CoverImageInternalContentDigest = 'coverImage___internal___contentDigest',
  CoverImageInternalDescription = 'coverImage___internal___description',
  CoverImageInternalFieldOwners = 'coverImage___internal___fieldOwners',
  CoverImageInternalIgnoreType = 'coverImage___internal___ignoreType',
  CoverImageInternalMediaType = 'coverImage___internal___mediaType',
  CoverImageInternalOwner = 'coverImage___internal___owner',
  CoverImageInternalType = 'coverImage___internal___type',
  CoverImageLocale = 'coverImage___locale',
  CoverImageMimeType = 'coverImage___mimeType',
  CoverImageParentChildren = 'coverImage___parent___children',
  CoverImageParentChildrenChildren = 'coverImage___parent___children___children',
  CoverImageParentChildrenId = 'coverImage___parent___children___id',
  CoverImageParentId = 'coverImage___parent___id',
  CoverImageParentInternalContent = 'coverImage___parent___internal___content',
  CoverImageParentInternalContentDigest = 'coverImage___parent___internal___contentDigest',
  CoverImageParentInternalDescription = 'coverImage___parent___internal___description',
  CoverImageParentInternalFieldOwners = 'coverImage___parent___internal___fieldOwners',
  CoverImageParentInternalIgnoreType = 'coverImage___parent___internal___ignoreType',
  CoverImageParentInternalMediaType = 'coverImage___parent___internal___mediaType',
  CoverImageParentInternalOwner = 'coverImage___parent___internal___owner',
  CoverImageParentInternalType = 'coverImage___parent___internal___type',
  CoverImageParentParentChildren = 'coverImage___parent___parent___children',
  CoverImageParentParentId = 'coverImage___parent___parent___id',
  CoverImagePublishedAt = 'coverImage___publishedAt',
  CoverImagePublishedByChildren = 'coverImage___publishedBy___children',
  CoverImagePublishedByChildrenChildren = 'coverImage___publishedBy___children___children',
  CoverImagePublishedByChildrenId = 'coverImage___publishedBy___children___id',
  CoverImagePublishedByCreatedAt = 'coverImage___publishedBy___createdAt',
  CoverImagePublishedById = 'coverImage___publishedBy___id',
  CoverImagePublishedByInternalContent = 'coverImage___publishedBy___internal___content',
  CoverImagePublishedByInternalContentDigest = 'coverImage___publishedBy___internal___contentDigest',
  CoverImagePublishedByInternalDescription = 'coverImage___publishedBy___internal___description',
  CoverImagePublishedByInternalFieldOwners = 'coverImage___publishedBy___internal___fieldOwners',
  CoverImagePublishedByInternalIgnoreType = 'coverImage___publishedBy___internal___ignoreType',
  CoverImagePublishedByInternalMediaType = 'coverImage___publishedBy___internal___mediaType',
  CoverImagePublishedByInternalOwner = 'coverImage___publishedBy___internal___owner',
  CoverImagePublishedByInternalType = 'coverImage___publishedBy___internal___type',
  CoverImagePublishedByIsActive = 'coverImage___publishedBy___isActive',
  CoverImagePublishedByKind = 'coverImage___publishedBy___kind',
  CoverImagePublishedByName = 'coverImage___publishedBy___name',
  CoverImagePublishedByParentChildren = 'coverImage___publishedBy___parent___children',
  CoverImagePublishedByParentId = 'coverImage___publishedBy___parent___id',
  CoverImagePublishedByPicture = 'coverImage___publishedBy___picture',
  CoverImagePublishedByPublishedAt = 'coverImage___publishedBy___publishedAt',
  CoverImagePublishedByRemoteId = 'coverImage___publishedBy___remoteId',
  CoverImagePublishedByRemoteTypeName = 'coverImage___publishedBy___remoteTypeName',
  CoverImagePublishedByStage = 'coverImage___publishedBy___stage',
  CoverImagePublishedByUpdatedAt = 'coverImage___publishedBy___updatedAt',
  CoverImageRemoteId = 'coverImage___remoteId',
  CoverImageRemoteTypeName = 'coverImage___remoteTypeName',
  CoverImageSeoImage = 'coverImage___seoImage',
  CoverImageSeoImageChildren = 'coverImage___seoImage___children',
  CoverImageSeoImageChildrenChildren = 'coverImage___seoImage___children___children',
  CoverImageSeoImageChildrenId = 'coverImage___seoImage___children___id',
  CoverImageSeoImageCreatedAt = 'coverImage___seoImage___createdAt',
  CoverImageSeoImageCreatedByChildren = 'coverImage___seoImage___createdBy___children',
  CoverImageSeoImageCreatedByCreatedAt = 'coverImage___seoImage___createdBy___createdAt',
  CoverImageSeoImageCreatedById = 'coverImage___seoImage___createdBy___id',
  CoverImageSeoImageCreatedByIsActive = 'coverImage___seoImage___createdBy___isActive',
  CoverImageSeoImageCreatedByKind = 'coverImage___seoImage___createdBy___kind',
  CoverImageSeoImageCreatedByName = 'coverImage___seoImage___createdBy___name',
  CoverImageSeoImageCreatedByPicture = 'coverImage___seoImage___createdBy___picture',
  CoverImageSeoImageCreatedByPublishedAt = 'coverImage___seoImage___createdBy___publishedAt',
  CoverImageSeoImageCreatedByRemoteId = 'coverImage___seoImage___createdBy___remoteId',
  CoverImageSeoImageCreatedByRemoteTypeName = 'coverImage___seoImage___createdBy___remoteTypeName',
  CoverImageSeoImageCreatedByStage = 'coverImage___seoImage___createdBy___stage',
  CoverImageSeoImageCreatedByUpdatedAt = 'coverImage___seoImage___createdBy___updatedAt',
  CoverImageSeoImageDescription = 'coverImage___seoImage___description',
  CoverImageSeoImageId = 'coverImage___seoImage___id',
  CoverImageSeoImageImageAuthorAvatar = 'coverImage___seoImage___image___authorAvatar',
  CoverImageSeoImageImageChildren = 'coverImage___seoImage___image___children',
  CoverImageSeoImageImageCoverImagePost = 'coverImage___seoImage___image___coverImagePost',
  CoverImageSeoImageImageCreatedAt = 'coverImage___seoImage___image___createdAt',
  CoverImageSeoImageImageFileName = 'coverImage___seoImage___image___fileName',
  CoverImageSeoImageImageHandle = 'coverImage___seoImage___image___handle',
  CoverImageSeoImageImageHeight = 'coverImage___seoImage___image___height',
  CoverImageSeoImageImageId = 'coverImage___seoImage___image___id',
  CoverImageSeoImageImageLocale = 'coverImage___seoImage___image___locale',
  CoverImageSeoImageImageMimeType = 'coverImage___seoImage___image___mimeType',
  CoverImageSeoImageImagePublishedAt = 'coverImage___seoImage___image___publishedAt',
  CoverImageSeoImageImageRemoteId = 'coverImage___seoImage___image___remoteId',
  CoverImageSeoImageImageRemoteTypeName = 'coverImage___seoImage___image___remoteTypeName',
  CoverImageSeoImageImageSeoImage = 'coverImage___seoImage___image___seoImage',
  CoverImageSeoImageImageSize = 'coverImage___seoImage___image___size',
  CoverImageSeoImageImageStage = 'coverImage___seoImage___image___stage',
  CoverImageSeoImageImageUpdatedAt = 'coverImage___seoImage___image___updatedAt',
  CoverImageSeoImageImageUrl = 'coverImage___seoImage___image___url',
  CoverImageSeoImageImageWidth = 'coverImage___seoImage___image___width',
  CoverImageSeoImageInternalContent = 'coverImage___seoImage___internal___content',
  CoverImageSeoImageInternalContentDigest = 'coverImage___seoImage___internal___contentDigest',
  CoverImageSeoImageInternalDescription = 'coverImage___seoImage___internal___description',
  CoverImageSeoImageInternalFieldOwners = 'coverImage___seoImage___internal___fieldOwners',
  CoverImageSeoImageInternalIgnoreType = 'coverImage___seoImage___internal___ignoreType',
  CoverImageSeoImageInternalMediaType = 'coverImage___seoImage___internal___mediaType',
  CoverImageSeoImageInternalOwner = 'coverImage___seoImage___internal___owner',
  CoverImageSeoImageInternalType = 'coverImage___seoImage___internal___type',
  CoverImageSeoImageKeywords = 'coverImage___seoImage___keywords',
  CoverImageSeoImageParentChildren = 'coverImage___seoImage___parent___children',
  CoverImageSeoImageParentId = 'coverImage___seoImage___parent___id',
  CoverImageSeoImagePublishedAt = 'coverImage___seoImage___publishedAt',
  CoverImageSeoImagePublishedByChildren = 'coverImage___seoImage___publishedBy___children',
  CoverImageSeoImagePublishedByCreatedAt = 'coverImage___seoImage___publishedBy___createdAt',
  CoverImageSeoImagePublishedById = 'coverImage___seoImage___publishedBy___id',
  CoverImageSeoImagePublishedByIsActive = 'coverImage___seoImage___publishedBy___isActive',
  CoverImageSeoImagePublishedByKind = 'coverImage___seoImage___publishedBy___kind',
  CoverImageSeoImagePublishedByName = 'coverImage___seoImage___publishedBy___name',
  CoverImageSeoImagePublishedByPicture = 'coverImage___seoImage___publishedBy___picture',
  CoverImageSeoImagePublishedByPublishedAt = 'coverImage___seoImage___publishedBy___publishedAt',
  CoverImageSeoImagePublishedByRemoteId = 'coverImage___seoImage___publishedBy___remoteId',
  CoverImageSeoImagePublishedByRemoteTypeName = 'coverImage___seoImage___publishedBy___remoteTypeName',
  CoverImageSeoImagePublishedByStage = 'coverImage___seoImage___publishedBy___stage',
  CoverImageSeoImagePublishedByUpdatedAt = 'coverImage___seoImage___publishedBy___updatedAt',
  CoverImageSeoImageRemoteId = 'coverImage___seoImage___remoteId',
  CoverImageSeoImageRemoteTypeName = 'coverImage___seoImage___remoteTypeName',
  CoverImageSeoImageStage = 'coverImage___seoImage___stage',
  CoverImageSeoImageTitle = 'coverImage___seoImage___title',
  CoverImageSeoImageUpdatedAt = 'coverImage___seoImage___updatedAt',
  CoverImageSeoImageUpdatedByChildren = 'coverImage___seoImage___updatedBy___children',
  CoverImageSeoImageUpdatedByCreatedAt = 'coverImage___seoImage___updatedBy___createdAt',
  CoverImageSeoImageUpdatedById = 'coverImage___seoImage___updatedBy___id',
  CoverImageSeoImageUpdatedByIsActive = 'coverImage___seoImage___updatedBy___isActive',
  CoverImageSeoImageUpdatedByKind = 'coverImage___seoImage___updatedBy___kind',
  CoverImageSeoImageUpdatedByName = 'coverImage___seoImage___updatedBy___name',
  CoverImageSeoImageUpdatedByPicture = 'coverImage___seoImage___updatedBy___picture',
  CoverImageSeoImageUpdatedByPublishedAt = 'coverImage___seoImage___updatedBy___publishedAt',
  CoverImageSeoImageUpdatedByRemoteId = 'coverImage___seoImage___updatedBy___remoteId',
  CoverImageSeoImageUpdatedByRemoteTypeName = 'coverImage___seoImage___updatedBy___remoteTypeName',
  CoverImageSeoImageUpdatedByStage = 'coverImage___seoImage___updatedBy___stage',
  CoverImageSeoImageUpdatedByUpdatedAt = 'coverImage___seoImage___updatedBy___updatedAt',
  CoverImageSize = 'coverImage___size',
  CoverImageStage = 'coverImage___stage',
  CoverImageUpdatedAt = 'coverImage___updatedAt',
  CoverImageUpdatedByChildren = 'coverImage___updatedBy___children',
  CoverImageUpdatedByChildrenChildren = 'coverImage___updatedBy___children___children',
  CoverImageUpdatedByChildrenId = 'coverImage___updatedBy___children___id',
  CoverImageUpdatedByCreatedAt = 'coverImage___updatedBy___createdAt',
  CoverImageUpdatedById = 'coverImage___updatedBy___id',
  CoverImageUpdatedByInternalContent = 'coverImage___updatedBy___internal___content',
  CoverImageUpdatedByInternalContentDigest = 'coverImage___updatedBy___internal___contentDigest',
  CoverImageUpdatedByInternalDescription = 'coverImage___updatedBy___internal___description',
  CoverImageUpdatedByInternalFieldOwners = 'coverImage___updatedBy___internal___fieldOwners',
  CoverImageUpdatedByInternalIgnoreType = 'coverImage___updatedBy___internal___ignoreType',
  CoverImageUpdatedByInternalMediaType = 'coverImage___updatedBy___internal___mediaType',
  CoverImageUpdatedByInternalOwner = 'coverImage___updatedBy___internal___owner',
  CoverImageUpdatedByInternalType = 'coverImage___updatedBy___internal___type',
  CoverImageUpdatedByIsActive = 'coverImage___updatedBy___isActive',
  CoverImageUpdatedByKind = 'coverImage___updatedBy___kind',
  CoverImageUpdatedByName = 'coverImage___updatedBy___name',
  CoverImageUpdatedByParentChildren = 'coverImage___updatedBy___parent___children',
  CoverImageUpdatedByParentId = 'coverImage___updatedBy___parent___id',
  CoverImageUpdatedByPicture = 'coverImage___updatedBy___picture',
  CoverImageUpdatedByPublishedAt = 'coverImage___updatedBy___publishedAt',
  CoverImageUpdatedByRemoteId = 'coverImage___updatedBy___remoteId',
  CoverImageUpdatedByRemoteTypeName = 'coverImage___updatedBy___remoteTypeName',
  CoverImageUpdatedByStage = 'coverImage___updatedBy___stage',
  CoverImageUpdatedByUpdatedAt = 'coverImage___updatedBy___updatedAt',
  CoverImageUrl = 'coverImage___url',
  CoverImageWidth = 'coverImage___width',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Date = 'date',
  Excerpt = 'excerpt',
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
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  SeoChildren = 'seo___children',
  SeoChildrenChildren = 'seo___children___children',
  SeoChildrenChildrenChildren = 'seo___children___children___children',
  SeoChildrenChildrenId = 'seo___children___children___id',
  SeoChildrenId = 'seo___children___id',
  SeoChildrenInternalContent = 'seo___children___internal___content',
  SeoChildrenInternalContentDigest = 'seo___children___internal___contentDigest',
  SeoChildrenInternalDescription = 'seo___children___internal___description',
  SeoChildrenInternalFieldOwners = 'seo___children___internal___fieldOwners',
  SeoChildrenInternalIgnoreType = 'seo___children___internal___ignoreType',
  SeoChildrenInternalMediaType = 'seo___children___internal___mediaType',
  SeoChildrenInternalOwner = 'seo___children___internal___owner',
  SeoChildrenInternalType = 'seo___children___internal___type',
  SeoChildrenParentChildren = 'seo___children___parent___children',
  SeoChildrenParentId = 'seo___children___parent___id',
  SeoCreatedAt = 'seo___createdAt',
  SeoCreatedByChildren = 'seo___createdBy___children',
  SeoCreatedByChildrenChildren = 'seo___createdBy___children___children',
  SeoCreatedByChildrenId = 'seo___createdBy___children___id',
  SeoCreatedByCreatedAt = 'seo___createdBy___createdAt',
  SeoCreatedById = 'seo___createdBy___id',
  SeoCreatedByInternalContent = 'seo___createdBy___internal___content',
  SeoCreatedByInternalContentDigest = 'seo___createdBy___internal___contentDigest',
  SeoCreatedByInternalDescription = 'seo___createdBy___internal___description',
  SeoCreatedByInternalFieldOwners = 'seo___createdBy___internal___fieldOwners',
  SeoCreatedByInternalIgnoreType = 'seo___createdBy___internal___ignoreType',
  SeoCreatedByInternalMediaType = 'seo___createdBy___internal___mediaType',
  SeoCreatedByInternalOwner = 'seo___createdBy___internal___owner',
  SeoCreatedByInternalType = 'seo___createdBy___internal___type',
  SeoCreatedByIsActive = 'seo___createdBy___isActive',
  SeoCreatedByKind = 'seo___createdBy___kind',
  SeoCreatedByName = 'seo___createdBy___name',
  SeoCreatedByParentChildren = 'seo___createdBy___parent___children',
  SeoCreatedByParentId = 'seo___createdBy___parent___id',
  SeoCreatedByPicture = 'seo___createdBy___picture',
  SeoCreatedByPublishedAt = 'seo___createdBy___publishedAt',
  SeoCreatedByRemoteId = 'seo___createdBy___remoteId',
  SeoCreatedByRemoteTypeName = 'seo___createdBy___remoteTypeName',
  SeoCreatedByStage = 'seo___createdBy___stage',
  SeoCreatedByUpdatedAt = 'seo___createdBy___updatedAt',
  SeoDescription = 'seo___description',
  SeoId = 'seo___id',
  SeoImageAuthorAvatar = 'seo___image___authorAvatar',
  SeoImageAuthorAvatarBiography = 'seo___image___authorAvatar___biography',
  SeoImageAuthorAvatarChildren = 'seo___image___authorAvatar___children',
  SeoImageAuthorAvatarCreatedAt = 'seo___image___authorAvatar___createdAt',
  SeoImageAuthorAvatarId = 'seo___image___authorAvatar___id',
  SeoImageAuthorAvatarName = 'seo___image___authorAvatar___name',
  SeoImageAuthorAvatarPosts = 'seo___image___authorAvatar___posts',
  SeoImageAuthorAvatarPublishedAt = 'seo___image___authorAvatar___publishedAt',
  SeoImageAuthorAvatarRemoteId = 'seo___image___authorAvatar___remoteId',
  SeoImageAuthorAvatarRemoteTypeName = 'seo___image___authorAvatar___remoteTypeName',
  SeoImageAuthorAvatarStage = 'seo___image___authorAvatar___stage',
  SeoImageAuthorAvatarTitle = 'seo___image___authorAvatar___title',
  SeoImageAuthorAvatarUpdatedAt = 'seo___image___authorAvatar___updatedAt',
  SeoImageChildren = 'seo___image___children',
  SeoImageChildrenChildren = 'seo___image___children___children',
  SeoImageChildrenId = 'seo___image___children___id',
  SeoImageCoverImagePost = 'seo___image___coverImagePost',
  SeoImageCoverImagePostChildren = 'seo___image___coverImagePost___children',
  SeoImageCoverImagePostCreatedAt = 'seo___image___coverImagePost___createdAt',
  SeoImageCoverImagePostDate = 'seo___image___coverImagePost___date',
  SeoImageCoverImagePostExcerpt = 'seo___image___coverImagePost___excerpt',
  SeoImageCoverImagePostId = 'seo___image___coverImagePost___id',
  SeoImageCoverImagePostPublishedAt = 'seo___image___coverImagePost___publishedAt',
  SeoImageCoverImagePostRemoteId = 'seo___image___coverImagePost___remoteId',
  SeoImageCoverImagePostRemoteTypeName = 'seo___image___coverImagePost___remoteTypeName',
  SeoImageCoverImagePostSlug = 'seo___image___coverImagePost___slug',
  SeoImageCoverImagePostStage = 'seo___image___coverImagePost___stage',
  SeoImageCoverImagePostTags = 'seo___image___coverImagePost___tags',
  SeoImageCoverImagePostTitle = 'seo___image___coverImagePost___title',
  SeoImageCoverImagePostUpdatedAt = 'seo___image___coverImagePost___updatedAt',
  SeoImageCreatedAt = 'seo___image___createdAt',
  SeoImageCreatedByChildren = 'seo___image___createdBy___children',
  SeoImageCreatedByCreatedAt = 'seo___image___createdBy___createdAt',
  SeoImageCreatedById = 'seo___image___createdBy___id',
  SeoImageCreatedByIsActive = 'seo___image___createdBy___isActive',
  SeoImageCreatedByKind = 'seo___image___createdBy___kind',
  SeoImageCreatedByName = 'seo___image___createdBy___name',
  SeoImageCreatedByPicture = 'seo___image___createdBy___picture',
  SeoImageCreatedByPublishedAt = 'seo___image___createdBy___publishedAt',
  SeoImageCreatedByRemoteId = 'seo___image___createdBy___remoteId',
  SeoImageCreatedByRemoteTypeName = 'seo___image___createdBy___remoteTypeName',
  SeoImageCreatedByStage = 'seo___image___createdBy___stage',
  SeoImageCreatedByUpdatedAt = 'seo___image___createdBy___updatedAt',
  SeoImageFileName = 'seo___image___fileName',
  SeoImageHandle = 'seo___image___handle',
  SeoImageHeight = 'seo___image___height',
  SeoImageId = 'seo___image___id',
  SeoImageInternalContent = 'seo___image___internal___content',
  SeoImageInternalContentDigest = 'seo___image___internal___contentDigest',
  SeoImageInternalDescription = 'seo___image___internal___description',
  SeoImageInternalFieldOwners = 'seo___image___internal___fieldOwners',
  SeoImageInternalIgnoreType = 'seo___image___internal___ignoreType',
  SeoImageInternalMediaType = 'seo___image___internal___mediaType',
  SeoImageInternalOwner = 'seo___image___internal___owner',
  SeoImageInternalType = 'seo___image___internal___type',
  SeoImageLocale = 'seo___image___locale',
  SeoImageMimeType = 'seo___image___mimeType',
  SeoImageParentChildren = 'seo___image___parent___children',
  SeoImageParentId = 'seo___image___parent___id',
  SeoImagePublishedAt = 'seo___image___publishedAt',
  SeoImagePublishedByChildren = 'seo___image___publishedBy___children',
  SeoImagePublishedByCreatedAt = 'seo___image___publishedBy___createdAt',
  SeoImagePublishedById = 'seo___image___publishedBy___id',
  SeoImagePublishedByIsActive = 'seo___image___publishedBy___isActive',
  SeoImagePublishedByKind = 'seo___image___publishedBy___kind',
  SeoImagePublishedByName = 'seo___image___publishedBy___name',
  SeoImagePublishedByPicture = 'seo___image___publishedBy___picture',
  SeoImagePublishedByPublishedAt = 'seo___image___publishedBy___publishedAt',
  SeoImagePublishedByRemoteId = 'seo___image___publishedBy___remoteId',
  SeoImagePublishedByRemoteTypeName = 'seo___image___publishedBy___remoteTypeName',
  SeoImagePublishedByStage = 'seo___image___publishedBy___stage',
  SeoImagePublishedByUpdatedAt = 'seo___image___publishedBy___updatedAt',
  SeoImageRemoteId = 'seo___image___remoteId',
  SeoImageRemoteTypeName = 'seo___image___remoteTypeName',
  SeoImageSeoImage = 'seo___image___seoImage',
  SeoImageSeoImageChildren = 'seo___image___seoImage___children',
  SeoImageSeoImageCreatedAt = 'seo___image___seoImage___createdAt',
  SeoImageSeoImageDescription = 'seo___image___seoImage___description',
  SeoImageSeoImageId = 'seo___image___seoImage___id',
  SeoImageSeoImageKeywords = 'seo___image___seoImage___keywords',
  SeoImageSeoImagePublishedAt = 'seo___image___seoImage___publishedAt',
  SeoImageSeoImageRemoteId = 'seo___image___seoImage___remoteId',
  SeoImageSeoImageRemoteTypeName = 'seo___image___seoImage___remoteTypeName',
  SeoImageSeoImageStage = 'seo___image___seoImage___stage',
  SeoImageSeoImageTitle = 'seo___image___seoImage___title',
  SeoImageSeoImageUpdatedAt = 'seo___image___seoImage___updatedAt',
  SeoImageSize = 'seo___image___size',
  SeoImageStage = 'seo___image___stage',
  SeoImageUpdatedAt = 'seo___image___updatedAt',
  SeoImageUpdatedByChildren = 'seo___image___updatedBy___children',
  SeoImageUpdatedByCreatedAt = 'seo___image___updatedBy___createdAt',
  SeoImageUpdatedById = 'seo___image___updatedBy___id',
  SeoImageUpdatedByIsActive = 'seo___image___updatedBy___isActive',
  SeoImageUpdatedByKind = 'seo___image___updatedBy___kind',
  SeoImageUpdatedByName = 'seo___image___updatedBy___name',
  SeoImageUpdatedByPicture = 'seo___image___updatedBy___picture',
  SeoImageUpdatedByPublishedAt = 'seo___image___updatedBy___publishedAt',
  SeoImageUpdatedByRemoteId = 'seo___image___updatedBy___remoteId',
  SeoImageUpdatedByRemoteTypeName = 'seo___image___updatedBy___remoteTypeName',
  SeoImageUpdatedByStage = 'seo___image___updatedBy___stage',
  SeoImageUpdatedByUpdatedAt = 'seo___image___updatedBy___updatedAt',
  SeoImageUrl = 'seo___image___url',
  SeoImageWidth = 'seo___image___width',
  SeoInternalContent = 'seo___internal___content',
  SeoInternalContentDigest = 'seo___internal___contentDigest',
  SeoInternalDescription = 'seo___internal___description',
  SeoInternalFieldOwners = 'seo___internal___fieldOwners',
  SeoInternalIgnoreType = 'seo___internal___ignoreType',
  SeoInternalMediaType = 'seo___internal___mediaType',
  SeoInternalOwner = 'seo___internal___owner',
  SeoInternalType = 'seo___internal___type',
  SeoKeywords = 'seo___keywords',
  SeoParentChildren = 'seo___parent___children',
  SeoParentChildrenChildren = 'seo___parent___children___children',
  SeoParentChildrenId = 'seo___parent___children___id',
  SeoParentId = 'seo___parent___id',
  SeoParentInternalContent = 'seo___parent___internal___content',
  SeoParentInternalContentDigest = 'seo___parent___internal___contentDigest',
  SeoParentInternalDescription = 'seo___parent___internal___description',
  SeoParentInternalFieldOwners = 'seo___parent___internal___fieldOwners',
  SeoParentInternalIgnoreType = 'seo___parent___internal___ignoreType',
  SeoParentInternalMediaType = 'seo___parent___internal___mediaType',
  SeoParentInternalOwner = 'seo___parent___internal___owner',
  SeoParentInternalType = 'seo___parent___internal___type',
  SeoParentParentChildren = 'seo___parent___parent___children',
  SeoParentParentId = 'seo___parent___parent___id',
  SeoPublishedAt = 'seo___publishedAt',
  SeoPublishedByChildren = 'seo___publishedBy___children',
  SeoPublishedByChildrenChildren = 'seo___publishedBy___children___children',
  SeoPublishedByChildrenId = 'seo___publishedBy___children___id',
  SeoPublishedByCreatedAt = 'seo___publishedBy___createdAt',
  SeoPublishedById = 'seo___publishedBy___id',
  SeoPublishedByInternalContent = 'seo___publishedBy___internal___content',
  SeoPublishedByInternalContentDigest = 'seo___publishedBy___internal___contentDigest',
  SeoPublishedByInternalDescription = 'seo___publishedBy___internal___description',
  SeoPublishedByInternalFieldOwners = 'seo___publishedBy___internal___fieldOwners',
  SeoPublishedByInternalIgnoreType = 'seo___publishedBy___internal___ignoreType',
  SeoPublishedByInternalMediaType = 'seo___publishedBy___internal___mediaType',
  SeoPublishedByInternalOwner = 'seo___publishedBy___internal___owner',
  SeoPublishedByInternalType = 'seo___publishedBy___internal___type',
  SeoPublishedByIsActive = 'seo___publishedBy___isActive',
  SeoPublishedByKind = 'seo___publishedBy___kind',
  SeoPublishedByName = 'seo___publishedBy___name',
  SeoPublishedByParentChildren = 'seo___publishedBy___parent___children',
  SeoPublishedByParentId = 'seo___publishedBy___parent___id',
  SeoPublishedByPicture = 'seo___publishedBy___picture',
  SeoPublishedByPublishedAt = 'seo___publishedBy___publishedAt',
  SeoPublishedByRemoteId = 'seo___publishedBy___remoteId',
  SeoPublishedByRemoteTypeName = 'seo___publishedBy___remoteTypeName',
  SeoPublishedByStage = 'seo___publishedBy___stage',
  SeoPublishedByUpdatedAt = 'seo___publishedBy___updatedAt',
  SeoRemoteId = 'seo___remoteId',
  SeoRemoteTypeName = 'seo___remoteTypeName',
  SeoStage = 'seo___stage',
  SeoTitle = 'seo___title',
  SeoUpdatedAt = 'seo___updatedAt',
  SeoUpdatedByChildren = 'seo___updatedBy___children',
  SeoUpdatedByChildrenChildren = 'seo___updatedBy___children___children',
  SeoUpdatedByChildrenId = 'seo___updatedBy___children___id',
  SeoUpdatedByCreatedAt = 'seo___updatedBy___createdAt',
  SeoUpdatedById = 'seo___updatedBy___id',
  SeoUpdatedByInternalContent = 'seo___updatedBy___internal___content',
  SeoUpdatedByInternalContentDigest = 'seo___updatedBy___internal___contentDigest',
  SeoUpdatedByInternalDescription = 'seo___updatedBy___internal___description',
  SeoUpdatedByInternalFieldOwners = 'seo___updatedBy___internal___fieldOwners',
  SeoUpdatedByInternalIgnoreType = 'seo___updatedBy___internal___ignoreType',
  SeoUpdatedByInternalMediaType = 'seo___updatedBy___internal___mediaType',
  SeoUpdatedByInternalOwner = 'seo___updatedBy___internal___owner',
  SeoUpdatedByInternalType = 'seo___updatedBy___internal___type',
  SeoUpdatedByIsActive = 'seo___updatedBy___isActive',
  SeoUpdatedByKind = 'seo___updatedBy___kind',
  SeoUpdatedByName = 'seo___updatedBy___name',
  SeoUpdatedByParentChildren = 'seo___updatedBy___parent___children',
  SeoUpdatedByParentId = 'seo___updatedBy___parent___id',
  SeoUpdatedByPicture = 'seo___updatedBy___picture',
  SeoUpdatedByPublishedAt = 'seo___updatedBy___publishedAt',
  SeoUpdatedByRemoteId = 'seo___updatedBy___remoteId',
  SeoUpdatedByRemoteTypeName = 'seo___updatedBy___remoteTypeName',
  SeoUpdatedByStage = 'seo___updatedBy___stage',
  SeoUpdatedByUpdatedAt = 'seo___updatedBy___updatedAt',
  Slug = 'slug',
  Stage = 'stage',
  Tags = 'tags',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt'
}

export type GraphCms_PostFilterInput = {
  author: Maybe<GraphCms_AuthorFilterInput>;
  children: Maybe<NodeFilterListInput>;
  content: Maybe<GraphCms_RichTextFilterInput>;
  coverImage: Maybe<GraphCms_AssetFilterInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  date: Maybe<JsonQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seo: Maybe<GraphCms_SeoFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};

export type GraphCms_PostFilterListInput = {
  elemMatch: Maybe<GraphCms_PostFilterInput>;
};

export type GraphCms_PostGroupConnection = {
  edges: Array<GraphCms_PostEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_Post>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphCms_PostSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_PostFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GraphCms_RichText = {
  html: Scalars['String'];
  markdown: Scalars['String'];
  raw: Scalars['JSON'];
  remoteTypeName: Scalars['String'];
  text: Scalars['String'];
};

export type GraphCms_RichTextFilterInput = {
  html: Maybe<StringQueryOperatorInput>;
  markdown: Maybe<StringQueryOperatorInput>;
  raw: Maybe<JsonQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
};

export type GraphCms_Seo = Node & {
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy: Maybe<GraphCms_User>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<GraphCms_Asset>;
  internal: Internal;
  keywords: Array<Scalars['String']>;
  parent: Maybe<Node>;
  publishedAt: Maybe<Scalars['JSON']>;
  publishedBy: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteParent: Maybe<GraphCms_SeoParent>;
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  title: Maybe<Scalars['String']>;
  updatedAt: Scalars['JSON'];
  updatedBy: Maybe<GraphCms_User>;
};

export type GraphCms_SeoConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_SeoEdge>;
  group: Array<GraphCms_SeoGroupConnection>;
  nodes: Array<GraphCms_Seo>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_SeoConnectionDistinctArgs = {
  field: GraphCms_SeoFieldsEnum;
};


export type GraphCms_SeoConnectionGroupArgs = {
  field: GraphCms_SeoFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_SeoEdge = {
  next: Maybe<GraphCms_Seo>;
  node: GraphCms_Seo;
  previous: Maybe<GraphCms_Seo>;
};

export enum GraphCms_SeoFieldsEnum {
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
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Description = 'description',
  Id = 'id',
  ImageAuthorAvatar = 'image___authorAvatar',
  ImageAuthorAvatarBiography = 'image___authorAvatar___biography',
  ImageAuthorAvatarChildren = 'image___authorAvatar___children',
  ImageAuthorAvatarChildrenChildren = 'image___authorAvatar___children___children',
  ImageAuthorAvatarChildrenId = 'image___authorAvatar___children___id',
  ImageAuthorAvatarCreatedAt = 'image___authorAvatar___createdAt',
  ImageAuthorAvatarCreatedByChildren = 'image___authorAvatar___createdBy___children',
  ImageAuthorAvatarCreatedByCreatedAt = 'image___authorAvatar___createdBy___createdAt',
  ImageAuthorAvatarCreatedById = 'image___authorAvatar___createdBy___id',
  ImageAuthorAvatarCreatedByIsActive = 'image___authorAvatar___createdBy___isActive',
  ImageAuthorAvatarCreatedByKind = 'image___authorAvatar___createdBy___kind',
  ImageAuthorAvatarCreatedByName = 'image___authorAvatar___createdBy___name',
  ImageAuthorAvatarCreatedByPicture = 'image___authorAvatar___createdBy___picture',
  ImageAuthorAvatarCreatedByPublishedAt = 'image___authorAvatar___createdBy___publishedAt',
  ImageAuthorAvatarCreatedByRemoteId = 'image___authorAvatar___createdBy___remoteId',
  ImageAuthorAvatarCreatedByRemoteTypeName = 'image___authorAvatar___createdBy___remoteTypeName',
  ImageAuthorAvatarCreatedByStage = 'image___authorAvatar___createdBy___stage',
  ImageAuthorAvatarCreatedByUpdatedAt = 'image___authorAvatar___createdBy___updatedAt',
  ImageAuthorAvatarId = 'image___authorAvatar___id',
  ImageAuthorAvatarInternalContent = 'image___authorAvatar___internal___content',
  ImageAuthorAvatarInternalContentDigest = 'image___authorAvatar___internal___contentDigest',
  ImageAuthorAvatarInternalDescription = 'image___authorAvatar___internal___description',
  ImageAuthorAvatarInternalFieldOwners = 'image___authorAvatar___internal___fieldOwners',
  ImageAuthorAvatarInternalIgnoreType = 'image___authorAvatar___internal___ignoreType',
  ImageAuthorAvatarInternalMediaType = 'image___authorAvatar___internal___mediaType',
  ImageAuthorAvatarInternalOwner = 'image___authorAvatar___internal___owner',
  ImageAuthorAvatarInternalType = 'image___authorAvatar___internal___type',
  ImageAuthorAvatarName = 'image___authorAvatar___name',
  ImageAuthorAvatarParentChildren = 'image___authorAvatar___parent___children',
  ImageAuthorAvatarParentId = 'image___authorAvatar___parent___id',
  ImageAuthorAvatarPictureAuthorAvatar = 'image___authorAvatar___picture___authorAvatar',
  ImageAuthorAvatarPictureChildren = 'image___authorAvatar___picture___children',
  ImageAuthorAvatarPictureCoverImagePost = 'image___authorAvatar___picture___coverImagePost',
  ImageAuthorAvatarPictureCreatedAt = 'image___authorAvatar___picture___createdAt',
  ImageAuthorAvatarPictureFileName = 'image___authorAvatar___picture___fileName',
  ImageAuthorAvatarPictureHandle = 'image___authorAvatar___picture___handle',
  ImageAuthorAvatarPictureHeight = 'image___authorAvatar___picture___height',
  ImageAuthorAvatarPictureId = 'image___authorAvatar___picture___id',
  ImageAuthorAvatarPictureLocale = 'image___authorAvatar___picture___locale',
  ImageAuthorAvatarPictureMimeType = 'image___authorAvatar___picture___mimeType',
  ImageAuthorAvatarPicturePublishedAt = 'image___authorAvatar___picture___publishedAt',
  ImageAuthorAvatarPictureRemoteId = 'image___authorAvatar___picture___remoteId',
  ImageAuthorAvatarPictureRemoteTypeName = 'image___authorAvatar___picture___remoteTypeName',
  ImageAuthorAvatarPictureSeoImage = 'image___authorAvatar___picture___seoImage',
  ImageAuthorAvatarPictureSize = 'image___authorAvatar___picture___size',
  ImageAuthorAvatarPictureStage = 'image___authorAvatar___picture___stage',
  ImageAuthorAvatarPictureUpdatedAt = 'image___authorAvatar___picture___updatedAt',
  ImageAuthorAvatarPictureUrl = 'image___authorAvatar___picture___url',
  ImageAuthorAvatarPictureWidth = 'image___authorAvatar___picture___width',
  ImageAuthorAvatarPosts = 'image___authorAvatar___posts',
  ImageAuthorAvatarPostsChildren = 'image___authorAvatar___posts___children',
  ImageAuthorAvatarPostsCreatedAt = 'image___authorAvatar___posts___createdAt',
  ImageAuthorAvatarPostsDate = 'image___authorAvatar___posts___date',
  ImageAuthorAvatarPostsExcerpt = 'image___authorAvatar___posts___excerpt',
  ImageAuthorAvatarPostsId = 'image___authorAvatar___posts___id',
  ImageAuthorAvatarPostsPublishedAt = 'image___authorAvatar___posts___publishedAt',
  ImageAuthorAvatarPostsRemoteId = 'image___authorAvatar___posts___remoteId',
  ImageAuthorAvatarPostsRemoteTypeName = 'image___authorAvatar___posts___remoteTypeName',
  ImageAuthorAvatarPostsSlug = 'image___authorAvatar___posts___slug',
  ImageAuthorAvatarPostsStage = 'image___authorAvatar___posts___stage',
  ImageAuthorAvatarPostsTags = 'image___authorAvatar___posts___tags',
  ImageAuthorAvatarPostsTitle = 'image___authorAvatar___posts___title',
  ImageAuthorAvatarPostsUpdatedAt = 'image___authorAvatar___posts___updatedAt',
  ImageAuthorAvatarPublishedAt = 'image___authorAvatar___publishedAt',
  ImageAuthorAvatarPublishedByChildren = 'image___authorAvatar___publishedBy___children',
  ImageAuthorAvatarPublishedByCreatedAt = 'image___authorAvatar___publishedBy___createdAt',
  ImageAuthorAvatarPublishedById = 'image___authorAvatar___publishedBy___id',
  ImageAuthorAvatarPublishedByIsActive = 'image___authorAvatar___publishedBy___isActive',
  ImageAuthorAvatarPublishedByKind = 'image___authorAvatar___publishedBy___kind',
  ImageAuthorAvatarPublishedByName = 'image___authorAvatar___publishedBy___name',
  ImageAuthorAvatarPublishedByPicture = 'image___authorAvatar___publishedBy___picture',
  ImageAuthorAvatarPublishedByPublishedAt = 'image___authorAvatar___publishedBy___publishedAt',
  ImageAuthorAvatarPublishedByRemoteId = 'image___authorAvatar___publishedBy___remoteId',
  ImageAuthorAvatarPublishedByRemoteTypeName = 'image___authorAvatar___publishedBy___remoteTypeName',
  ImageAuthorAvatarPublishedByStage = 'image___authorAvatar___publishedBy___stage',
  ImageAuthorAvatarPublishedByUpdatedAt = 'image___authorAvatar___publishedBy___updatedAt',
  ImageAuthorAvatarRemoteId = 'image___authorAvatar___remoteId',
  ImageAuthorAvatarRemoteTypeName = 'image___authorAvatar___remoteTypeName',
  ImageAuthorAvatarStage = 'image___authorAvatar___stage',
  ImageAuthorAvatarTitle = 'image___authorAvatar___title',
  ImageAuthorAvatarUpdatedAt = 'image___authorAvatar___updatedAt',
  ImageAuthorAvatarUpdatedByChildren = 'image___authorAvatar___updatedBy___children',
  ImageAuthorAvatarUpdatedByCreatedAt = 'image___authorAvatar___updatedBy___createdAt',
  ImageAuthorAvatarUpdatedById = 'image___authorAvatar___updatedBy___id',
  ImageAuthorAvatarUpdatedByIsActive = 'image___authorAvatar___updatedBy___isActive',
  ImageAuthorAvatarUpdatedByKind = 'image___authorAvatar___updatedBy___kind',
  ImageAuthorAvatarUpdatedByName = 'image___authorAvatar___updatedBy___name',
  ImageAuthorAvatarUpdatedByPicture = 'image___authorAvatar___updatedBy___picture',
  ImageAuthorAvatarUpdatedByPublishedAt = 'image___authorAvatar___updatedBy___publishedAt',
  ImageAuthorAvatarUpdatedByRemoteId = 'image___authorAvatar___updatedBy___remoteId',
  ImageAuthorAvatarUpdatedByRemoteTypeName = 'image___authorAvatar___updatedBy___remoteTypeName',
  ImageAuthorAvatarUpdatedByStage = 'image___authorAvatar___updatedBy___stage',
  ImageAuthorAvatarUpdatedByUpdatedAt = 'image___authorAvatar___updatedBy___updatedAt',
  ImageChildren = 'image___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageCoverImagePost = 'image___coverImagePost',
  ImageCoverImagePostAuthorBiography = 'image___coverImagePost___author___biography',
  ImageCoverImagePostAuthorChildren = 'image___coverImagePost___author___children',
  ImageCoverImagePostAuthorCreatedAt = 'image___coverImagePost___author___createdAt',
  ImageCoverImagePostAuthorId = 'image___coverImagePost___author___id',
  ImageCoverImagePostAuthorName = 'image___coverImagePost___author___name',
  ImageCoverImagePostAuthorPosts = 'image___coverImagePost___author___posts',
  ImageCoverImagePostAuthorPublishedAt = 'image___coverImagePost___author___publishedAt',
  ImageCoverImagePostAuthorRemoteId = 'image___coverImagePost___author___remoteId',
  ImageCoverImagePostAuthorRemoteTypeName = 'image___coverImagePost___author___remoteTypeName',
  ImageCoverImagePostAuthorStage = 'image___coverImagePost___author___stage',
  ImageCoverImagePostAuthorTitle = 'image___coverImagePost___author___title',
  ImageCoverImagePostAuthorUpdatedAt = 'image___coverImagePost___author___updatedAt',
  ImageCoverImagePostChildren = 'image___coverImagePost___children',
  ImageCoverImagePostChildrenChildren = 'image___coverImagePost___children___children',
  ImageCoverImagePostChildrenId = 'image___coverImagePost___children___id',
  ImageCoverImagePostContentHtml = 'image___coverImagePost___content___html',
  ImageCoverImagePostContentMarkdown = 'image___coverImagePost___content___markdown',
  ImageCoverImagePostContentRaw = 'image___coverImagePost___content___raw',
  ImageCoverImagePostContentRemoteTypeName = 'image___coverImagePost___content___remoteTypeName',
  ImageCoverImagePostContentText = 'image___coverImagePost___content___text',
  ImageCoverImagePostCoverImageAuthorAvatar = 'image___coverImagePost___coverImage___authorAvatar',
  ImageCoverImagePostCoverImageChildren = 'image___coverImagePost___coverImage___children',
  ImageCoverImagePostCoverImageCoverImagePost = 'image___coverImagePost___coverImage___coverImagePost',
  ImageCoverImagePostCoverImageCreatedAt = 'image___coverImagePost___coverImage___createdAt',
  ImageCoverImagePostCoverImageFileName = 'image___coverImagePost___coverImage___fileName',
  ImageCoverImagePostCoverImageHandle = 'image___coverImagePost___coverImage___handle',
  ImageCoverImagePostCoverImageHeight = 'image___coverImagePost___coverImage___height',
  ImageCoverImagePostCoverImageId = 'image___coverImagePost___coverImage___id',
  ImageCoverImagePostCoverImageLocale = 'image___coverImagePost___coverImage___locale',
  ImageCoverImagePostCoverImageMimeType = 'image___coverImagePost___coverImage___mimeType',
  ImageCoverImagePostCoverImagePublishedAt = 'image___coverImagePost___coverImage___publishedAt',
  ImageCoverImagePostCoverImageRemoteId = 'image___coverImagePost___coverImage___remoteId',
  ImageCoverImagePostCoverImageRemoteTypeName = 'image___coverImagePost___coverImage___remoteTypeName',
  ImageCoverImagePostCoverImageSeoImage = 'image___coverImagePost___coverImage___seoImage',
  ImageCoverImagePostCoverImageSize = 'image___coverImagePost___coverImage___size',
  ImageCoverImagePostCoverImageStage = 'image___coverImagePost___coverImage___stage',
  ImageCoverImagePostCoverImageUpdatedAt = 'image___coverImagePost___coverImage___updatedAt',
  ImageCoverImagePostCoverImageUrl = 'image___coverImagePost___coverImage___url',
  ImageCoverImagePostCoverImageWidth = 'image___coverImagePost___coverImage___width',
  ImageCoverImagePostCreatedAt = 'image___coverImagePost___createdAt',
  ImageCoverImagePostCreatedByChildren = 'image___coverImagePost___createdBy___children',
  ImageCoverImagePostCreatedByCreatedAt = 'image___coverImagePost___createdBy___createdAt',
  ImageCoverImagePostCreatedById = 'image___coverImagePost___createdBy___id',
  ImageCoverImagePostCreatedByIsActive = 'image___coverImagePost___createdBy___isActive',
  ImageCoverImagePostCreatedByKind = 'image___coverImagePost___createdBy___kind',
  ImageCoverImagePostCreatedByName = 'image___coverImagePost___createdBy___name',
  ImageCoverImagePostCreatedByPicture = 'image___coverImagePost___createdBy___picture',
  ImageCoverImagePostCreatedByPublishedAt = 'image___coverImagePost___createdBy___publishedAt',
  ImageCoverImagePostCreatedByRemoteId = 'image___coverImagePost___createdBy___remoteId',
  ImageCoverImagePostCreatedByRemoteTypeName = 'image___coverImagePost___createdBy___remoteTypeName',
  ImageCoverImagePostCreatedByStage = 'image___coverImagePost___createdBy___stage',
  ImageCoverImagePostCreatedByUpdatedAt = 'image___coverImagePost___createdBy___updatedAt',
  ImageCoverImagePostDate = 'image___coverImagePost___date',
  ImageCoverImagePostExcerpt = 'image___coverImagePost___excerpt',
  ImageCoverImagePostId = 'image___coverImagePost___id',
  ImageCoverImagePostInternalContent = 'image___coverImagePost___internal___content',
  ImageCoverImagePostInternalContentDigest = 'image___coverImagePost___internal___contentDigest',
  ImageCoverImagePostInternalDescription = 'image___coverImagePost___internal___description',
  ImageCoverImagePostInternalFieldOwners = 'image___coverImagePost___internal___fieldOwners',
  ImageCoverImagePostInternalIgnoreType = 'image___coverImagePost___internal___ignoreType',
  ImageCoverImagePostInternalMediaType = 'image___coverImagePost___internal___mediaType',
  ImageCoverImagePostInternalOwner = 'image___coverImagePost___internal___owner',
  ImageCoverImagePostInternalType = 'image___coverImagePost___internal___type',
  ImageCoverImagePostParentChildren = 'image___coverImagePost___parent___children',
  ImageCoverImagePostParentId = 'image___coverImagePost___parent___id',
  ImageCoverImagePostPublishedAt = 'image___coverImagePost___publishedAt',
  ImageCoverImagePostPublishedByChildren = 'image___coverImagePost___publishedBy___children',
  ImageCoverImagePostPublishedByCreatedAt = 'image___coverImagePost___publishedBy___createdAt',
  ImageCoverImagePostPublishedById = 'image___coverImagePost___publishedBy___id',
  ImageCoverImagePostPublishedByIsActive = 'image___coverImagePost___publishedBy___isActive',
  ImageCoverImagePostPublishedByKind = 'image___coverImagePost___publishedBy___kind',
  ImageCoverImagePostPublishedByName = 'image___coverImagePost___publishedBy___name',
  ImageCoverImagePostPublishedByPicture = 'image___coverImagePost___publishedBy___picture',
  ImageCoverImagePostPublishedByPublishedAt = 'image___coverImagePost___publishedBy___publishedAt',
  ImageCoverImagePostPublishedByRemoteId = 'image___coverImagePost___publishedBy___remoteId',
  ImageCoverImagePostPublishedByRemoteTypeName = 'image___coverImagePost___publishedBy___remoteTypeName',
  ImageCoverImagePostPublishedByStage = 'image___coverImagePost___publishedBy___stage',
  ImageCoverImagePostPublishedByUpdatedAt = 'image___coverImagePost___publishedBy___updatedAt',
  ImageCoverImagePostRemoteId = 'image___coverImagePost___remoteId',
  ImageCoverImagePostRemoteTypeName = 'image___coverImagePost___remoteTypeName',
  ImageCoverImagePostSeoChildren = 'image___coverImagePost___seo___children',
  ImageCoverImagePostSeoCreatedAt = 'image___coverImagePost___seo___createdAt',
  ImageCoverImagePostSeoDescription = 'image___coverImagePost___seo___description',
  ImageCoverImagePostSeoId = 'image___coverImagePost___seo___id',
  ImageCoverImagePostSeoKeywords = 'image___coverImagePost___seo___keywords',
  ImageCoverImagePostSeoPublishedAt = 'image___coverImagePost___seo___publishedAt',
  ImageCoverImagePostSeoRemoteId = 'image___coverImagePost___seo___remoteId',
  ImageCoverImagePostSeoRemoteTypeName = 'image___coverImagePost___seo___remoteTypeName',
  ImageCoverImagePostSeoStage = 'image___coverImagePost___seo___stage',
  ImageCoverImagePostSeoTitle = 'image___coverImagePost___seo___title',
  ImageCoverImagePostSeoUpdatedAt = 'image___coverImagePost___seo___updatedAt',
  ImageCoverImagePostSlug = 'image___coverImagePost___slug',
  ImageCoverImagePostStage = 'image___coverImagePost___stage',
  ImageCoverImagePostTags = 'image___coverImagePost___tags',
  ImageCoverImagePostTitle = 'image___coverImagePost___title',
  ImageCoverImagePostUpdatedAt = 'image___coverImagePost___updatedAt',
  ImageCoverImagePostUpdatedByChildren = 'image___coverImagePost___updatedBy___children',
  ImageCoverImagePostUpdatedByCreatedAt = 'image___coverImagePost___updatedBy___createdAt',
  ImageCoverImagePostUpdatedById = 'image___coverImagePost___updatedBy___id',
  ImageCoverImagePostUpdatedByIsActive = 'image___coverImagePost___updatedBy___isActive',
  ImageCoverImagePostUpdatedByKind = 'image___coverImagePost___updatedBy___kind',
  ImageCoverImagePostUpdatedByName = 'image___coverImagePost___updatedBy___name',
  ImageCoverImagePostUpdatedByPicture = 'image___coverImagePost___updatedBy___picture',
  ImageCoverImagePostUpdatedByPublishedAt = 'image___coverImagePost___updatedBy___publishedAt',
  ImageCoverImagePostUpdatedByRemoteId = 'image___coverImagePost___updatedBy___remoteId',
  ImageCoverImagePostUpdatedByRemoteTypeName = 'image___coverImagePost___updatedBy___remoteTypeName',
  ImageCoverImagePostUpdatedByStage = 'image___coverImagePost___updatedBy___stage',
  ImageCoverImagePostUpdatedByUpdatedAt = 'image___coverImagePost___updatedBy___updatedAt',
  ImageCreatedAt = 'image___createdAt',
  ImageCreatedByChildren = 'image___createdBy___children',
  ImageCreatedByChildrenChildren = 'image___createdBy___children___children',
  ImageCreatedByChildrenId = 'image___createdBy___children___id',
  ImageCreatedByCreatedAt = 'image___createdBy___createdAt',
  ImageCreatedById = 'image___createdBy___id',
  ImageCreatedByInternalContent = 'image___createdBy___internal___content',
  ImageCreatedByInternalContentDigest = 'image___createdBy___internal___contentDigest',
  ImageCreatedByInternalDescription = 'image___createdBy___internal___description',
  ImageCreatedByInternalFieldOwners = 'image___createdBy___internal___fieldOwners',
  ImageCreatedByInternalIgnoreType = 'image___createdBy___internal___ignoreType',
  ImageCreatedByInternalMediaType = 'image___createdBy___internal___mediaType',
  ImageCreatedByInternalOwner = 'image___createdBy___internal___owner',
  ImageCreatedByInternalType = 'image___createdBy___internal___type',
  ImageCreatedByIsActive = 'image___createdBy___isActive',
  ImageCreatedByKind = 'image___createdBy___kind',
  ImageCreatedByName = 'image___createdBy___name',
  ImageCreatedByParentChildren = 'image___createdBy___parent___children',
  ImageCreatedByParentId = 'image___createdBy___parent___id',
  ImageCreatedByPicture = 'image___createdBy___picture',
  ImageCreatedByPublishedAt = 'image___createdBy___publishedAt',
  ImageCreatedByRemoteId = 'image___createdBy___remoteId',
  ImageCreatedByRemoteTypeName = 'image___createdBy___remoteTypeName',
  ImageCreatedByStage = 'image___createdBy___stage',
  ImageCreatedByUpdatedAt = 'image___createdBy___updatedAt',
  ImageFileName = 'image___fileName',
  ImageHandle = 'image___handle',
  ImageHeight = 'image___height',
  ImageId = 'image___id',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageLocale = 'image___locale',
  ImageMimeType = 'image___mimeType',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePublishedAt = 'image___publishedAt',
  ImagePublishedByChildren = 'image___publishedBy___children',
  ImagePublishedByChildrenChildren = 'image___publishedBy___children___children',
  ImagePublishedByChildrenId = 'image___publishedBy___children___id',
  ImagePublishedByCreatedAt = 'image___publishedBy___createdAt',
  ImagePublishedById = 'image___publishedBy___id',
  ImagePublishedByInternalContent = 'image___publishedBy___internal___content',
  ImagePublishedByInternalContentDigest = 'image___publishedBy___internal___contentDigest',
  ImagePublishedByInternalDescription = 'image___publishedBy___internal___description',
  ImagePublishedByInternalFieldOwners = 'image___publishedBy___internal___fieldOwners',
  ImagePublishedByInternalIgnoreType = 'image___publishedBy___internal___ignoreType',
  ImagePublishedByInternalMediaType = 'image___publishedBy___internal___mediaType',
  ImagePublishedByInternalOwner = 'image___publishedBy___internal___owner',
  ImagePublishedByInternalType = 'image___publishedBy___internal___type',
  ImagePublishedByIsActive = 'image___publishedBy___isActive',
  ImagePublishedByKind = 'image___publishedBy___kind',
  ImagePublishedByName = 'image___publishedBy___name',
  ImagePublishedByParentChildren = 'image___publishedBy___parent___children',
  ImagePublishedByParentId = 'image___publishedBy___parent___id',
  ImagePublishedByPicture = 'image___publishedBy___picture',
  ImagePublishedByPublishedAt = 'image___publishedBy___publishedAt',
  ImagePublishedByRemoteId = 'image___publishedBy___remoteId',
  ImagePublishedByRemoteTypeName = 'image___publishedBy___remoteTypeName',
  ImagePublishedByStage = 'image___publishedBy___stage',
  ImagePublishedByUpdatedAt = 'image___publishedBy___updatedAt',
  ImageRemoteId = 'image___remoteId',
  ImageRemoteTypeName = 'image___remoteTypeName',
  ImageSeoImage = 'image___seoImage',
  ImageSeoImageChildren = 'image___seoImage___children',
  ImageSeoImageChildrenChildren = 'image___seoImage___children___children',
  ImageSeoImageChildrenId = 'image___seoImage___children___id',
  ImageSeoImageCreatedAt = 'image___seoImage___createdAt',
  ImageSeoImageCreatedByChildren = 'image___seoImage___createdBy___children',
  ImageSeoImageCreatedByCreatedAt = 'image___seoImage___createdBy___createdAt',
  ImageSeoImageCreatedById = 'image___seoImage___createdBy___id',
  ImageSeoImageCreatedByIsActive = 'image___seoImage___createdBy___isActive',
  ImageSeoImageCreatedByKind = 'image___seoImage___createdBy___kind',
  ImageSeoImageCreatedByName = 'image___seoImage___createdBy___name',
  ImageSeoImageCreatedByPicture = 'image___seoImage___createdBy___picture',
  ImageSeoImageCreatedByPublishedAt = 'image___seoImage___createdBy___publishedAt',
  ImageSeoImageCreatedByRemoteId = 'image___seoImage___createdBy___remoteId',
  ImageSeoImageCreatedByRemoteTypeName = 'image___seoImage___createdBy___remoteTypeName',
  ImageSeoImageCreatedByStage = 'image___seoImage___createdBy___stage',
  ImageSeoImageCreatedByUpdatedAt = 'image___seoImage___createdBy___updatedAt',
  ImageSeoImageDescription = 'image___seoImage___description',
  ImageSeoImageId = 'image___seoImage___id',
  ImageSeoImageImageAuthorAvatar = 'image___seoImage___image___authorAvatar',
  ImageSeoImageImageChildren = 'image___seoImage___image___children',
  ImageSeoImageImageCoverImagePost = 'image___seoImage___image___coverImagePost',
  ImageSeoImageImageCreatedAt = 'image___seoImage___image___createdAt',
  ImageSeoImageImageFileName = 'image___seoImage___image___fileName',
  ImageSeoImageImageHandle = 'image___seoImage___image___handle',
  ImageSeoImageImageHeight = 'image___seoImage___image___height',
  ImageSeoImageImageId = 'image___seoImage___image___id',
  ImageSeoImageImageLocale = 'image___seoImage___image___locale',
  ImageSeoImageImageMimeType = 'image___seoImage___image___mimeType',
  ImageSeoImageImagePublishedAt = 'image___seoImage___image___publishedAt',
  ImageSeoImageImageRemoteId = 'image___seoImage___image___remoteId',
  ImageSeoImageImageRemoteTypeName = 'image___seoImage___image___remoteTypeName',
  ImageSeoImageImageSeoImage = 'image___seoImage___image___seoImage',
  ImageSeoImageImageSize = 'image___seoImage___image___size',
  ImageSeoImageImageStage = 'image___seoImage___image___stage',
  ImageSeoImageImageUpdatedAt = 'image___seoImage___image___updatedAt',
  ImageSeoImageImageUrl = 'image___seoImage___image___url',
  ImageSeoImageImageWidth = 'image___seoImage___image___width',
  ImageSeoImageInternalContent = 'image___seoImage___internal___content',
  ImageSeoImageInternalContentDigest = 'image___seoImage___internal___contentDigest',
  ImageSeoImageInternalDescription = 'image___seoImage___internal___description',
  ImageSeoImageInternalFieldOwners = 'image___seoImage___internal___fieldOwners',
  ImageSeoImageInternalIgnoreType = 'image___seoImage___internal___ignoreType',
  ImageSeoImageInternalMediaType = 'image___seoImage___internal___mediaType',
  ImageSeoImageInternalOwner = 'image___seoImage___internal___owner',
  ImageSeoImageInternalType = 'image___seoImage___internal___type',
  ImageSeoImageKeywords = 'image___seoImage___keywords',
  ImageSeoImageParentChildren = 'image___seoImage___parent___children',
  ImageSeoImageParentId = 'image___seoImage___parent___id',
  ImageSeoImagePublishedAt = 'image___seoImage___publishedAt',
  ImageSeoImagePublishedByChildren = 'image___seoImage___publishedBy___children',
  ImageSeoImagePublishedByCreatedAt = 'image___seoImage___publishedBy___createdAt',
  ImageSeoImagePublishedById = 'image___seoImage___publishedBy___id',
  ImageSeoImagePublishedByIsActive = 'image___seoImage___publishedBy___isActive',
  ImageSeoImagePublishedByKind = 'image___seoImage___publishedBy___kind',
  ImageSeoImagePublishedByName = 'image___seoImage___publishedBy___name',
  ImageSeoImagePublishedByPicture = 'image___seoImage___publishedBy___picture',
  ImageSeoImagePublishedByPublishedAt = 'image___seoImage___publishedBy___publishedAt',
  ImageSeoImagePublishedByRemoteId = 'image___seoImage___publishedBy___remoteId',
  ImageSeoImagePublishedByRemoteTypeName = 'image___seoImage___publishedBy___remoteTypeName',
  ImageSeoImagePublishedByStage = 'image___seoImage___publishedBy___stage',
  ImageSeoImagePublishedByUpdatedAt = 'image___seoImage___publishedBy___updatedAt',
  ImageSeoImageRemoteId = 'image___seoImage___remoteId',
  ImageSeoImageRemoteTypeName = 'image___seoImage___remoteTypeName',
  ImageSeoImageStage = 'image___seoImage___stage',
  ImageSeoImageTitle = 'image___seoImage___title',
  ImageSeoImageUpdatedAt = 'image___seoImage___updatedAt',
  ImageSeoImageUpdatedByChildren = 'image___seoImage___updatedBy___children',
  ImageSeoImageUpdatedByCreatedAt = 'image___seoImage___updatedBy___createdAt',
  ImageSeoImageUpdatedById = 'image___seoImage___updatedBy___id',
  ImageSeoImageUpdatedByIsActive = 'image___seoImage___updatedBy___isActive',
  ImageSeoImageUpdatedByKind = 'image___seoImage___updatedBy___kind',
  ImageSeoImageUpdatedByName = 'image___seoImage___updatedBy___name',
  ImageSeoImageUpdatedByPicture = 'image___seoImage___updatedBy___picture',
  ImageSeoImageUpdatedByPublishedAt = 'image___seoImage___updatedBy___publishedAt',
  ImageSeoImageUpdatedByRemoteId = 'image___seoImage___updatedBy___remoteId',
  ImageSeoImageUpdatedByRemoteTypeName = 'image___seoImage___updatedBy___remoteTypeName',
  ImageSeoImageUpdatedByStage = 'image___seoImage___updatedBy___stage',
  ImageSeoImageUpdatedByUpdatedAt = 'image___seoImage___updatedBy___updatedAt',
  ImageSize = 'image___size',
  ImageStage = 'image___stage',
  ImageUpdatedAt = 'image___updatedAt',
  ImageUpdatedByChildren = 'image___updatedBy___children',
  ImageUpdatedByChildrenChildren = 'image___updatedBy___children___children',
  ImageUpdatedByChildrenId = 'image___updatedBy___children___id',
  ImageUpdatedByCreatedAt = 'image___updatedBy___createdAt',
  ImageUpdatedById = 'image___updatedBy___id',
  ImageUpdatedByInternalContent = 'image___updatedBy___internal___content',
  ImageUpdatedByInternalContentDigest = 'image___updatedBy___internal___contentDigest',
  ImageUpdatedByInternalDescription = 'image___updatedBy___internal___description',
  ImageUpdatedByInternalFieldOwners = 'image___updatedBy___internal___fieldOwners',
  ImageUpdatedByInternalIgnoreType = 'image___updatedBy___internal___ignoreType',
  ImageUpdatedByInternalMediaType = 'image___updatedBy___internal___mediaType',
  ImageUpdatedByInternalOwner = 'image___updatedBy___internal___owner',
  ImageUpdatedByInternalType = 'image___updatedBy___internal___type',
  ImageUpdatedByIsActive = 'image___updatedBy___isActive',
  ImageUpdatedByKind = 'image___updatedBy___kind',
  ImageUpdatedByName = 'image___updatedBy___name',
  ImageUpdatedByParentChildren = 'image___updatedBy___parent___children',
  ImageUpdatedByParentId = 'image___updatedBy___parent___id',
  ImageUpdatedByPicture = 'image___updatedBy___picture',
  ImageUpdatedByPublishedAt = 'image___updatedBy___publishedAt',
  ImageUpdatedByRemoteId = 'image___updatedBy___remoteId',
  ImageUpdatedByRemoteTypeName = 'image___updatedBy___remoteTypeName',
  ImageUpdatedByStage = 'image___updatedBy___stage',
  ImageUpdatedByUpdatedAt = 'image___updatedBy___updatedAt',
  ImageUrl = 'image___url',
  ImageWidth = 'image___width',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Keywords = 'keywords',
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
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt'
}

export type GraphCms_SeoFilterInput = {
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  image: Maybe<GraphCms_AssetFilterInput>;
  internal: Maybe<InternalFilterInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};

export type GraphCms_SeoFilterListInput = {
  elemMatch: Maybe<GraphCms_SeoFilterInput>;
};

export type GraphCms_SeoGroupConnection = {
  edges: Array<GraphCms_SeoEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_Seo>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GraphCms_SeoParent = GraphCms_Page | GraphCms_Post;

export type GraphCms_SeoSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_SeoFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum GraphCms_Stage {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type GraphCms_StageQueryOperatorInput = {
  eq: Maybe<GraphCms_Stage>;
  in: Maybe<Array<Maybe<GraphCms_Stage>>>;
  ne: Maybe<GraphCms_Stage>;
  nin: Maybe<Array<Maybe<GraphCms_Stage>>>;
};

export type GraphCms_User = Node & {
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  isActive: Scalars['Boolean'];
  kind: GraphCms_UserKind;
  name: Scalars['String'];
  parent: Maybe<Node>;
  picture: Maybe<Scalars['String']>;
  publishedAt: Maybe<Scalars['JSON']>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  updatedAt: Scalars['JSON'];
};

export type GraphCms_UserConnection = {
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_UserEdge>;
  group: Array<GraphCms_UserGroupConnection>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionGroupArgs = {
  field: GraphCms_UserFieldsEnum;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

export type GraphCms_UserEdge = {
  next: Maybe<GraphCms_User>;
  node: GraphCms_User;
  previous: Maybe<GraphCms_User>;
};

export enum GraphCms_UserFieldsEnum {
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
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsActive = 'isActive',
  Kind = 'kind',
  Name = 'name',
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
  Picture = 'picture',
  PublishedAt = 'publishedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  UpdatedAt = 'updatedAt'
}

export type GraphCms_UserFilterInput = {
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  isActive: Maybe<BooleanQueryOperatorInput>;
  kind: Maybe<GraphCms_UserKindQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  picture: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
};

export type GraphCms_UserGroupConnection = {
  edges: Array<GraphCms_UserEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum GraphCms_UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type GraphCms_UserKindQueryOperatorInput = {
  eq: Maybe<GraphCms_UserKind>;
  in: Maybe<Array<Maybe<GraphCms_UserKind>>>;
  ne: Maybe<GraphCms_UserKind>;
  nin: Maybe<Array<Maybe<GraphCms_UserKind>>>;
};

export type GraphCms_UserSortInput = {
  fields: Maybe<Array<Maybe<GraphCms_UserFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq: Maybe<Scalars['ID']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  ne: Maybe<Scalars['ID']>;
  nin: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  allGraphCmsAsset: GraphCms_AssetConnection;
  allGraphCmsAuthor: GraphCms_AuthorConnection;
  allGraphCmsPage: GraphCms_PageConnection;
  allGraphCmsPost: GraphCms_PostConnection;
  allGraphCmsSeo: GraphCms_SeoConnection;
  allGraphCmsUser: GraphCms_UserConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  graphCmsAsset: Maybe<GraphCms_Asset>;
  graphCmsAuthor: Maybe<GraphCms_Author>;
  graphCmsPage: Maybe<GraphCms_Page>;
  graphCmsPost: Maybe<GraphCms_Post>;
  graphCmsSeo: Maybe<GraphCms_Seo>;
  graphCmsUser: Maybe<GraphCms_User>;
  imageSharp: Maybe<ImageSharp>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
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


export type QueryAllGraphCmsAssetArgs = {
  filter: Maybe<GraphCms_AssetFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_AssetSortInput>;
};


export type QueryAllGraphCmsAuthorArgs = {
  filter: Maybe<GraphCms_AuthorFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_AuthorSortInput>;
};


export type QueryAllGraphCmsPageArgs = {
  filter: Maybe<GraphCms_PageFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_PageSortInput>;
};


export type QueryAllGraphCmsPostArgs = {
  filter: Maybe<GraphCms_PostFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_PostSortInput>;
};


export type QueryAllGraphCmsSeoArgs = {
  filter: Maybe<GraphCms_SeoFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_SeoSortInput>;
};


export type QueryAllGraphCmsUserArgs = {
  filter: Maybe<GraphCms_UserFilterInput>;
  limit: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  sort: Maybe<GraphCms_UserSortInput>;
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


export type QueryGraphCmsAssetArgs = {
  authorAvatar: Maybe<GraphCms_AuthorFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  coverImagePost: Maybe<GraphCms_PostFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  fileName: Maybe<StringQueryOperatorInput>;
  handle: Maybe<StringQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  locale: Maybe<GraphCms_LocaleQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seoImage: Maybe<GraphCms_SeoFilterListInput>;
  size: Maybe<FloatQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
  url: Maybe<StringQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
};


export type QueryGraphCmsAuthorArgs = {
  biography: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  picture: Maybe<GraphCms_AssetFilterInput>;
  posts: Maybe<GraphCms_PostFilterListInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};


export type QueryGraphCmsPageArgs = {
  children: Maybe<NodeFilterListInput>;
  content: Maybe<GraphCms_RichTextFilterInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seo: Maybe<GraphCms_SeoFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};


export type QueryGraphCmsPostArgs = {
  author: Maybe<GraphCms_AuthorFilterInput>;
  children: Maybe<NodeFilterListInput>;
  content: Maybe<GraphCms_RichTextFilterInput>;
  coverImage: Maybe<GraphCms_AssetFilterInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  date: Maybe<JsonQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  seo: Maybe<GraphCms_SeoFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};


export type QueryGraphCmsSeoArgs = {
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  createdBy: Maybe<GraphCms_UserFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  image: Maybe<GraphCms_AssetFilterInput>;
  internal: Maybe<InternalFilterInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  publishedBy: Maybe<GraphCms_UserFilterInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
  updatedBy: Maybe<GraphCms_UserFilterInput>;
};


export type QueryGraphCmsUserArgs = {
  children: Maybe<NodeFilterListInput>;
  createdAt: Maybe<JsonQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  isActive: Maybe<BooleanQueryOperatorInput>;
  kind: Maybe<GraphCms_UserKindQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  picture: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<JsonQueryOperatorInput>;
  remoteId: Maybe<IdQueryOperatorInput>;
  remoteTypeName: Maybe<StringQueryOperatorInput>;
  stage: Maybe<GraphCms_StageQueryOperatorInput>;
  updatedAt: Maybe<JsonQueryOperatorInput>;
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
  PluginCreatorPluginOptionsBuildMarkdownNodes = 'pluginCreator___pluginOptions___buildMarkdownNodes',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsDownloadLocalImages = 'pluginCreator___pluginOptions___downloadLocalImages',
  PluginCreatorPluginOptionsEndpoint = 'pluginCreator___pluginOptions___endpoint',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsFragmentsPath = 'pluginCreator___pluginOptions___fragmentsPath',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsLocales = 'pluginCreator___pluginOptions___locales',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsTypePrefix = 'pluginCreator___pluginOptions___typePrefix',
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
  PluginOptionsBuildMarkdownNodes = 'pluginOptions___buildMarkdownNodes',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsDownloadLocalImages = 'pluginOptions___downloadLocalImages',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsFragmentsPath = 'pluginOptions___fragmentsPath',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsLocales = 'pluginOptions___locales',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStages = 'pluginOptions___stages',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsTypePrefix = 'pluginOptions___typePrefix',
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
  buildMarkdownNodes: Maybe<Scalars['Boolean']>;
  cacheDigest: Maybe<Scalars['String']>;
  cache_busting_mode: Maybe<Scalars['String']>;
  crossOrigin: Maybe<Scalars['String']>;
  defaultQuality: Maybe<Scalars['Int']>;
  display: Maybe<Scalars['String']>;
  downloadLocalImages: Maybe<Scalars['Boolean']>;
  endpoint: Maybe<Scalars['String']>;
  failOnError: Maybe<Scalars['Boolean']>;
  fragmentsPath: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  include_favicon: Maybe<Scalars['Boolean']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  legacy: Maybe<Scalars['Boolean']>;
  locales: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
  short_name: Maybe<Scalars['String']>;
  stages: Maybe<Array<Maybe<Scalars['String']>>>;
  start_url: Maybe<Scalars['String']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  theme_color: Maybe<Scalars['String']>;
  theme_color_in_head: Maybe<Scalars['Boolean']>;
  typePrefix: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  buildMarkdownNodes: Maybe<BooleanQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  downloadLocalImages: Maybe<BooleanQueryOperatorInput>;
  endpoint: Maybe<StringQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  fragmentsPath: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  locales: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  stages: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  typePrefix: Maybe<StringQueryOperatorInput>;
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
