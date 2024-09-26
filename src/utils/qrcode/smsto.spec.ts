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

import { describe, it, expect } from 'vitest'
import { useSmsTo } from './smsto'

const { createSmsQRcode } = useSmsTo()
describe('smsto', () => {
  it('SMS短信二维码', async () => {
    const url = await createSmsQRcode('18922886349', 'hello, world!')
    expect(url).eql('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOkSURBVO3BO65jSwIDwWRB+99yThvPoFWAcKTbn2FE/IWZ/xxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmHGbKi4eS8JNUWhKayjuScKPSktBUbpLwk1SeOMyUw0w5zJQXH6bySUm4UWlJaCotCTcqNypPqHxSEj7pMFMOM+UwU158WRLeofKEyo3KTRJuVD4pCe9Q+abDTDnMlMNMefGXS0JTaUm4UWkqN0loKv+Sw0w5zJTDTHnxj1O5ScKNyv+Tw0w5zJTDTHnxZSq/UxLeoXKj8kkqf5LDTDnMlMNMefFhSfiTqbQk3CShqbQkNJWbJPzJDjPlMFMOM+XFQyr/MpUblRuVv8lhphxmymGmxF94IAlN5R1JaCotCU+ovCMJNyotCd+kcpOEpvLEYaYcZsphprz4zVRuVG6S0FRaEp5QaUloKi0JTeUmCU3lJgnfdJgph5lymCkvPiwJNyotCe9QeYdKS0JTeYdKS0JTaUm4UXlC5ZMOM+UwUw4zJf7CA0loKi0J71C5SUJTaUloKjdJaCrvSEJTuUnCN6k8cZgph5lymCkvPiwJTaUloam0JLwjCU3lJgnvSEJT+UkqP+kwUw4z5TBTXnyYSkvCTRKayk0SmspNEppKS8KNSktCU7lJQlNpSWgqLQlN5ZsOM+UwUw4z5cVDKjcqLQlN5SYJN0l4QqUloancJOEnJaGpfNJhphxmymGmvPjNknCjcpOEpnKThKZyk4QblZaEmyTcJOF3OsyUw0w5zJT4Cw8k4QmVmyQ0lZaEG5UnktBUWhI+SeUdSWgqTxxmymGmHGbKi4dUvknlHSotCU2lJeFGpSXhRuUdSWhJaCotCd90mCmHmXKYKS8eSsJPUrlJQlNpSWgqLQktCU2lJeEmCU3lHUloKt90mCmHmXKYKS8+TOWTknCj8g6VJ5LwDpVvSkJTeeIwUw4z5TBTXnxZEt6h8o4kvEPlRqUloam0JLQkPKHyOx1mymGmHGbKi7+cSktCU2lJuFFpKi0JTeUmCU8koal802GmHGbKYaa8+MeotCTcqLxD5SYJTaUloancqLQkNJVPOsyUw0w5zJQXX6byO6ncJKGptCQ0lZaEpvKOJDyRhKbyxGGmHGbKYaa8+LAk/KQkNJV3qDyh0pLQVJrKO5LQVFoSPukwUw4z5TBT4i/M/OcwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBT/gcxRrX16NN9PQAAAABJRU5ErkJggg==')
  })
})
