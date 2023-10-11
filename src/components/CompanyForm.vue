<template>
  <div>
    <div>
      <header-nav />
    </div>
    <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <section class="mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <span
            class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3"><svg
              viewBox="0 0 24 24" width="24" height="24" class="inline-block">
              <path fill="currentColor"
                d="M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z">
              </path>
            </svg></span>
          <h1 class="text-xl md:text-lg lg:text-2xl leading-tight">Create Company</h1>
        </div>
        <button
          class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 p-1"
          type="button">
          <span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24" width="16" height="16"
              class="inline-block">
              <path fill="currentColor"
                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
              </path>
            </svg></span><!--v-if-->
        </button>
      </section>
      <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex" form="">
        <div class="flex-1 p-6">
          <div class="mb-6 last:mb-0">
            <label class="block font-bold mb-2">Company name</label>
            <div class="">
              <div class="relative">
                <input v-model="name" placeholder="Company's Name" type="text"
                  class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800" /><!--v-if-->
              </div>
            </div>
            <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">
              Do not enter the leading zero
            </div>
          </div>
        </div>
        <footer class="p-6">
          <div class="flex items-center justify-start flex-wrap -mb-3">
            <button
              class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
              type="submit" @click="createCompany">
              <!--v-if--><span class="px-2">Submit</span></button><button
              class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
              type="reset">
              <!--v-if--><span class="px-2">Reset</span>
            </button>
          </div>
          <hr class="-mx-6 dark:border-slate-800 border-t border-gray-100 my-10" />
          <!-- <div class="flex z-50 items-center flex-col justify-center overflow-hidden fixed inset-0" style="display: none">
            <div
              class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700">
            </div>
            <div
              class="rounded-2xl flex-col dark:bg-slate-900 bg-white flex shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
              style="display: none">
              <div class="flex-1 p-6">
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-2xl">Show Category</h1>
                </div>
                <div class="space-y-3">
                  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="p-4 flex bg-slate-500 mt-5 rounded items-center">
                      <h5 class="font-bold text-dark text-xl py-2 px-8 mr-5">Company Name:</h5>
                      <p class="text-dark text-lg border py-2 px-24 border-slate-500 font-medium mt-2"></p>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="p-6">
                <div class="flex items-center justify-start flex-wrap -mb-3">
                  <button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                    type="button">
                    <span class="px-2">Done</span></button>
                </div>
              </footer>
            </div>
          </div> -->
          
          <!-- edit company tab here -->
          <div class="flex z-50 items-center flex-col justify-center overflow-hidden fixed inset-0" style="display: none">
            <div
              class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700">
            </div>
            <div
              class="rounded-2xl flex-col dark:bg-slate-900 bg-white flex shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
              style="display: none">
              <div class="flex-1 p-6">
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-2xl">Edit Company</h1>
                </div>
                <div class="space-y-3">
                  <div>
                    <div class="mb-6 mt-3">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Name
                      </label>
                      <input
                        class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div class="flex items-center">
                      <button class="flex-1 mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                      </button>
                      <button class="flex-1 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="p-6">
                <div class="flex items-center justify-start flex-wrap -mb-3">
                  <button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                    type="button">
                    <!--v-if--><span class="px-2">Done</span></button><!--v-if-->
                </div>
              </footer>
            </div>
          </div>
          <!-- edit company tab ends here -->

          <!-- recent transactions starts here -->
          <div class="u-padding-block-end-56">
            <div class="">
              <div class="recent-transactions" style="padding-top: 25px">
                <h1>Companies</h1>
              </div>
              <div class="u-padding-block-12">
                <table class="table is-selected-columns-mobile">
                  <thead class="table-thead">
                    <tr class="table-row">
                      <th class="table-thead-col" style="--p-col-width: 100">
                        <span class="eyebrow-heading-3">ID</span>
                      </th>
                      <th class="table-thead-col is-only-desktop" style="--p-col-width: 150">
                        <span class="eyebrow-heading-3">Company name</span>
                      </th>
                      <th class="table-thead-col is-only-desktop" style="--p-col-width: 140">
                        <span class="eyebrow-heading-3">No of users</span>
                      </th>
                      <th class="table-thead-col is-only-desktop" style="--p-col-width: 100">
                        <span class="eyebrow-heading-3">Date</span>
                      </th>
                      <th class="table-thead-col" style="--p-col-width: 80">
                        <span class="eyebrow-heading-3">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="table-tbody">
                    <tr class="table-row" v-for="(item, index) in companies" :key="item.uuid">
                      <td class="table-col" data-title="Refrences">
                        <div class="u-inline-flex u-cross-center u-gap-12">
                          <span class="text u-break-word u-line-height-1-5">{{ index + 1 }}</span>
                        </div>
                      </td>
                      <td class="table-col is-only-desktop" data-title="Details">
                        <div class="text">
                          <span class="text">{{ item.name }}</span>
                        </div>
                      </td>
                      <td class="table-col is-only-desktop" data-title="Amount">
                        <span class="tag">{{}}</span>
                      </td>
                      <td class="table-col is-only-desktop" data-title="Date">
                        <time class="text">{{ item.created_at }}</time>
                      </td>
                      <td class="table-col u-overflow-visible">
                        <div class="u-flex">
                          <button class="button is-text is-only-icon" aria-label="more options">
                            <span class="icon-pencil" aria-hidden="true"></span>
                          </button>
                          <button class="button is-text is-only-icon" type="submit" @click="deleteCompany(item.uuid)">
                            <span class="icon-trash" aria-hidden="true"></span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- recent transactions ends here -->
          <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"><!----></div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import { axiosClient } from '../plugins/http'

export default {
  components: { HeaderNav },
  data() {
    return {
      name: '',
      companies: []
    }
  },
  mounted() {
    this.getCompanies()
  },
  methods: {
    async createCompany() {
      try {
        let response = await axiosClient.post('/company', { name: this.name })
        console.log(response)
        this.name = ''
        this.$swal({
          icon: 'success',
          title: 'Successful',
          text: 'You created company successfully'
        })
        this.getCompanies()
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async getCompanies() {
      try {
        let response = await axiosClient.get('/company')
        console.log(response)
        this.companies = response.data.data.allCompany.data
      } catch (error) {
        console.log(error)
      }
    },

    async deleteCompany(uuid) {
      try {
        const response = await axiosClient.delete(`/company/${uuid}`)
        console.log(response)
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal('Deleted!', 'Company has been deleted.', 'success')
          }
        })
        this.getCompanies()
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
}
</script>

<style></style>
