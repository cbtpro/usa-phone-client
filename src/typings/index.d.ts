// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

interface IResponseBody<T> {
  success: boolean;
  message: string;
  data: T;
}

interface PagingMeta {
  /** 本页记录数 */
  itemCount: number;
  /** 总记录数 */
  totalItems: number;
  /** 每页请求几页 */
  itemsPerPage: number;
  /** 总页数 */
  totalPages: number;
  /** 当前第几页 */
  currentPage: number;
}

interface PagingLinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}

interface IResponseBodyByPaging<T> {
  success: boolean;
  message: string;
  data: T[];
  meta?: PagingMeta;
  links?: PagingLinks;
}

interface PageTabsItem {
  title: string;
  path: string;
  name: string;
  key: string;
}

interface IMockUser {
  title: string;
  name: string;
  url: string;
  date: string;
}

interface ISignUpUser {
  username: string;
  nickname: string;
  password: string;
}
