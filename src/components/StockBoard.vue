<template>
  <section class="">
    <div>
      <header-nav />
    </div>
    <div class="container">
      <!-- add stock form section here -->
      <div class="add_comp">
        <h1 class="u-padding-block-12 u-font-size-32 u-bold">Create Stock</h1>
        <div>
          <form class="form u-width-full-line u-max-width-100%" @submit.prevent="createStock()">
            <ul class="form-list">
              <li class="form-item">
                <div class="input-text-wrapper">
                  <label class="label">Stock name</label>
                  <input type="text" class="input-text" placeholder="Stock name" v-model="name" />
                </div>
              </li>
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Status and company</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div class="select">
                      <select name="pets" id="pet-select" v-model="status">
                        <option value="">Select status</option>
                        <option value="1">Active</option>
                        <option value="2">In-active</option>
                      </select>
                      <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                    <div class="select">
                      <select name="pets" id="pet-select" v-model="company">
                        <option value="">Select company</option>
                        <option :value="item.uuid" v-for="item in companies" :key="item.uuid">
                          {{ item.name }}
                        </option>
                      </select>
                      <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="form-item">
                <div class="input-text-wrapper">
                  <label class="label">Re-order Level</label>
                  <input type="text" class="input-text" placeholder="Re-order Level" v-model="rol" />
                </div>
              </li>
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Units available and sold</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div>
                      <input type="number" class="input-text" placeholder="Units available" v-model="unit_available" />
                    </div>
                    <div>
                      <input type="number" class="input-text" placeholder="Units sold" v-model="unit_sold" />
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <footer class="pt-6">
              <div class="flex items-center justify-start flex-wrap -mb-3">
                <button
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                  type="submit">
                  <!--v-if--><span class="px-2">Add</span></button><button
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                  type="reset">
                  <!--v-if--><span class="px-2">Reset</span>
                </button>
              </div>
            </footer>
          </form>
        </div>
      </div>
      <!-- list stocks section here -->
      <div class="list-comp" style="padding-top: 25px">
        <h2 class="u-padding-block-12 u-medium u-bold">List of Stocks</h2>
        <div class="u-padding-block-12">
          <table class="table is-selected-columns-mobile">
            <thead class="table-thead">
              <tr class="table-row">
                <th class="table-thead-col" style="--p-col-width: 40">
                  <span class="eyebrow-heading-3">No</span>
                </th>
                <th class="table-thead-col" style="--p-col-width: 140">
                  <span class="eyebrow-heading-3">Stock Name</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 120">
                  <span class="eyebrow-heading-3">Status</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 140">
                  <span class="eyebrow-heading-3">Units available</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 120">
                  <span class="eyebrow-heading-3">Rol</span>
                </th>
                <th class="table-thead-col" style="--p-col-width: 80">Actions</th>
              </tr>
            </thead>
            <tbody class="table-tbody">
              <tr class="table-row" v-for="(item, index) in stocks" :key="item.uuid">
                <td class="table-col" data-title="Refrences">
                  <div class="u-inline-flex u-cross-center u-gap-12">
                    <span class="text u-break-word u-line-height-1-5">{{ index + 1 }}</span>
                  </div>
                </td>
                <td class="table-col is-only-desktop" data-title="Details">
                  <div class="text"><span class="text">{{ item.name }}</span></div>
                </td>
                <td class="table-col is-only-desktop" data-title="Amount">
                  <span class="tag">{{ item.status }}</span>
                </td>
                <td class="table-col is-only-desktop" data-title="Date">
                  <time class="text">{{ item.unit_available }}</time>
                </td>
                <td class="table-col is-only-desktop" data-title="Date">
                  <span class="text">{{ item.rol }}</span>
                </td>
                <td class="table-col u-overflow-visible">
                  <div class="u-flex">
                    <button class="button is-text is-only-icon" @click="editStock">
                      <span class="icon-pencil" aria-hidden="true"></span>
                    </button>
                    <button class="button is-text is-only-icon" type="submit" @click="deleteStock(item.uuid)">
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
  </section>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import { axiosClient } from '../plugins/http';
import { number } from 'yup';

export default {
  components: { HeaderNav },
  data() {
    return {
      name: '',
      company: null,
      status: null,
      rol: '',
      unit_available: number,
      unit_sold: number,
      companies: [],
      stocks: []
    }
  },
  mounted() {
    this.getStocks();
    this.getCompanies();
  },
  methods: {
    async createStock() {
      const response = await axiosClient.post('/stock', {
        name: this.name,
        company: this.company,
        status: this.status,
        rol: this.rol,
        unit_available: this.unit_available,
        unit_sold: this.unit_sold
      })
      this.name = ''
      this.company = ''
      this.status = ''
      this.status = ''
      this.rol = ''
      this.unit_available = ''
      this.unit_sold = ''
      console.log(response);
      this.getStocks();
    },
    async getStocks() {
      try {
        const response = await axiosClient.get('/stock')
        console.log(response)
        this.stocks = response.data.data.allStocks
      } catch (error) {
        console.log(error);
      }
    },
    async getCompanies() {
      try {
        let response = await axiosClient.get('/company')
        console.log(response)
        this.companies = response.data.data.allCompany.data
      } catch (error) {
        console.log(error);
      }
    },
    async deleteStock(uuid) {
      try {
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            const response = await axiosClient.delete(`/stock/${uuid}`)
            console.log(response)
            this.$swal('Deleted!', 'Company has been deleted.', 'success')
            this.getCompanies();
          }
        })
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
  }
}
</script>

<style></style>
