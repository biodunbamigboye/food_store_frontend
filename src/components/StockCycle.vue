.<template>
  <section class="container">
     <!-- add company form section here -->
     <div class="add_comp">
        <h1 class="u-padding-block-12 u-font-size-32 u-bold">Create Stock Cycle</h1>
        <div>
          <form class="form u-width-full-line u-max-width-100%">
            <ul class="form-list">
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Status and Stock</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">          
                    <div class="select">
                      <select name="pets" id="pet-select">
                        <option value="">Select status</option>
                        <option value="1">Active</option>
                        <option value="2">Paused</option>
                        <option value="1">Pending</option>
                        <option value="2">Completed</option>
                      </select>
                      <span class="icon-cheveron-down" aria-hidden="true"></span>
                    </div>
                    <div class="select">
                        <select name="pets" id="pet-select">
                          <option value="">Select option</option>
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
                <div class="u-width-full-line">
                  <label class="label">Units purchased and sold</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">          
                    <div>
                      <input type="number" class="input-text" placeholder="Units purchased" />
                    </div>
                    <div>
                      <input type="number" class="input-text" placeholder="Units sold" />
                    </div>
                    <div>
                  </div>
                  </div>
                </div>
              </li>
              <li class="form-item">
                <div class="u-width-full-line">
                  <label class="label">Selling Price and Purchased at</label>
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">          
                    <div>
                      <input type="number" class="input-number" placeholder="Selling Price" />
                    </div>
                    <div>
                      <input type="date" class="input-text" placeholder="Units sold" />
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
                  <!--v-if--><span class="px-2">Submit</span></button
                >
                <!-- <button
                  class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                  type="reset"
                >
                  <span class="px-2">Reset</span>
                </button> -->
              </div>
            </footer>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>