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
          <form class="form u-width-full-line u-max-width-100%">
            <ul class="form-list">
              <li class="form-item">
                <div class="input-text-wrapper">
                  <label class="label">Stock name</label>
                  <input type="text" class="input-text" placeholder="Stock name" />
                </div>
              </li>
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Status and company</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">          
                    <div class="select">
                      <select name="pets" id="pet-select">
                        <option value="">Select status</option>
                        <option value="1">Active</option>
                        <option value="2">In-active</option>
                      </select>
                      <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                    <div class="select">
                        <select name="pets" id="pet-select">
                          <option value="">Select company</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
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
                  <input type="text" class="input-text" placeholder="Re-order Level" />
                </div>
              </li>
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Units available and sold</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">          
                    <div>
                      <input type="number" class="input-text" placeholder="Units available" />
                    </div>
                    <div>
                      <input type="number" class="input-text" placeholder="Units sold" />
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
                  type="submit"
                  @submit="createStock" 
                >
                  <!--v-if--><span class="px-2">Add</span></button
                ><button
                   class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                  type="reset"
                >
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
                <th class="table-thead-col" style="--p-col-width: 100">
                  <span class="eyebrow-heading-3">Stock Name</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 140">
                  <span class="eyebrow-heading-3">Status</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 100">
                  <span class="eyebrow-heading-3">Units available</span>
                </th>
                <th class="table-thead-col is-only-desktop" style="--p-col-width: 120">
                  <span class="eyebrow-heading-3">Rol</span>
                </th>
                <th class="table-thead-col" style="--p-col-width: 40">Actions</th>
              </tr>
            </thead>
            <tbody class="table-tbody">
              <tr class="table-row">
                <td class="table-col" data-title="Refrences">
                  <div class="u-inline-flex u-cross-center u-gap-12">
                    <span class="text u-break-word u-line-height-1-5">airport.jpg</span>
                  </div>
                </td>
                <td class="table-col is-only-desktop" data-title="Details">
                  <div class="text"><span class="text">image/jpeg</span></div>
                </td>
                <td class="table-col is-only-desktop" data-title="Amount">
                  <span class="tag">$ 350.5</span>
                </td>
                <td class="table-col is-only-desktop" data-title="Date">
                  <time class="text">11 Mar 2022</time>
                </td>
                <td class="table-col u-overflow-visible">
                  <button class="button is-text is-only-icon" aria-label="more options">
                    <span class="icon-dots-horizontal" aria-hidden="true"></span>
                  </button>
                </td>
              </tr>
              <tr class="table-row">
                <td class="table-col" data-title="Refrences">
                  <div class="u-inline-flex u-cross-center u-gap-12">
                    <span class="text u-break-word u-line-height-1-5">airport.jpg</span>
                  </div>
                </td>
                <td class="table-col is-only-desktop" data-title="Details">
                  <div class="text"><span class="text">image/jpeg</span></div>
                </td>
                <td class="table-col is-only-desktop" data-title="Amount">
                  <span class="tag">$ 350.5</span>
                </td>
                <td class="table-col is-only-desktop" data-title="Date">
                  <time class="text">11 Mar 2022</time>
                </td>
                <td class="table-col u-overflow-visible">
                  <button class="button is-text is-only-icon" aria-label="more options">
                    <span class="icon-dots-horizontal" aria-hidden="true"></span>
                  </button>
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
import {axiosClient} from '../plugins/http';

export default {
  components: { HeaderNav },
  data (){
    return{

    }
  },
  mounted(){

  },
  methods: {
    async createStock () {
      const response = await axiosClient.post('/stock', {})
      console.log(response)
    }
  }
}
</script>

<style></style>
