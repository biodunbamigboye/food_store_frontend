<script>
import HeaderNav from "./HeaderNav.vue";
import "@appwrite.io/pink"; // optionally, add icons 
import "@appwrite.io/pink-icons";
import ChartLine from './Chart/ChartLine.vue';

export default {
  components: { HeaderNav, ChartLine },
  name: 'DashBoard'
}

</script>
<template>
  <section class="dashboard">
    <div>
      <header-nav/>
    </div>
    
      <div class="container">
        <div class="u-flex u-main-space-between u-cross-center">
          <h2 class="u-padding-block-12 u-font-size-32 u-bold">Overview</h2>
          <div>
            <button class="">
              <span>Star on GitHub</span>
            </button>
          </div>
        </div>
        <!-- Wallet Balance display start here -->
        <div>
          <ul
            class="grid-box"
            style="
              --grid-gap: 2rem;
              --grid-item-size: 18rem;
              --grid-item-size-small-screens: 16rem;
            "
          >
            <li>
              <div class="card">
                <div class="grid-item-1">
                  <div class="grid-item-1-start-start">
                    <div class="eyebrow-heading-3">Total Sales</div>
                    <h2 class="heading-level-6 u-margin-block-start-8">
                      <span>$</span> 
                      <span>5,000</span>
                    </h2>
                  </div>
                  <div class="grid-item-1-end-start">
                    <div class="u-flex u-gap-16 u-flex-wrap">
                      <button class="button">
                        <span class="text">Fund online</span>
                      </button>
                    </div>
                  </div>
                  <div class="grid-item-1-end-end">
                    <ul class="icons u-flex u-gap-8">
                      <li>
                        <span
                          class="icon-lock-closed"
                          aria-hidden="true"
                          aria-label="Secure [OR] unsecure"
                        ></span>
                      </li>
                      <li>
                        <span
                          class="icon-shield-check"
                          aria-hidden="true"
                          aria-label="Safe [OR] unsafe"
                        ></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="grid-item-1">
                  <div class="grid-item-1-start-start">
                    <div class="eyebrow-heading-3">Sales(Today)</div>
                    <h2 class="heading-level-6 u-margin-block-start-8">
                      <span>$</span> 5,000
                    </h2>
                  </div>
                  <div class="grid-item-1-end-start">
                    <div class="u-flex u-gap-16 u-flex-wrap">
                      <div class="tag">
                        <span class="icon-duplicate" aria-hidden="true"></span>
                        <span class="text">Copy account</span>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item-1-end-end">
                    <ul class="icons u-flex u-gap-8">
                      <li>
                        <span
                          class="icon-lock-closed"
                          aria-hidden="true"
                          aria-label="Secure [OR] unsecure"
                        ></span>
                      </li>
                      <li>
                        <span
                          class="icon-shield-check"
                          aria-hidden="true"
                          aria-label="Safe [OR] unsafe"
                        ></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="grid-item-1">
                  <div class="grid-item-1-start-start">
                    <div class="eyebrow-heading-3"> Products</div>
                    <h2 class="heading-level-6 u-margin-block-start-8">
                      <span></span>10
                    </h2>
                  </div>
                  <div class="grid-item-1-start-end">
                    <div class="status">
                      <button class="tag">
                        <span class="text">+60%</span>
                      </button>
                    </div>
                  </div>
                  <div class="grid-item-1-end-start">
                <div class="u-flex u-gap-16 u-flex-wrap">
                  <div class="tag">
                    <span class="icon-duplicate" aria-hidden="true"></span>
                    <span class="text">Interactive</span>
                  </div>
                </div>
              </div>
                  <div class="grid-item-1-end-end">
                    <ul class="icons u-flex u-gap-8">
                      <li>
                        <span
                          class="icon-lock-closed u-opacity-20"
                          aria-hidden="true"
                          aria-label="Secure [OR] unsecure"
                        ></span>
                      </li>
                      <li>
                        <span
                          class="icon-shield-check u-opacity-20"
                          aria-hidden="true"
                          aria-label="Safe [OR] unsafe"
                        ></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
         <!-- Wallet Balance display ends here -->

         <!-- chart start here -->
         <div class="u-padding-16">
          <chart-line/>
         </div>
         <!-- chart ends here -->
  
        <!-- recent transactions starts here -->
        <div class="u-padding-block-end-56">
          <div class="">
            <div class="recent-transactions" style="padding-top: 25px">
              <h1>Recent Transactions</h1>
            </div>
            <div class="u-padding-block-12">
              <table class="table is-selected-columns-mobile">
                <thead class="table-thead">
                  <tr class="table-row">
                    <th class="table-thead-col">
                      <span class="eyebrow-heading-3">Refrences</span>
                    </th>
                    <th
                      class="table-thead-col is-only-desktop"
                      style="--p-col-width: 140"
                    >
                      <span class="eyebrow-heading-3">Details</span>
                    </th>
                    <th
                      class="table-thead-col is-only-desktop"
                      style="--p-col-width: 100"
                    >
                      <span class="eyebrow-heading-3">Amount</span>
                    </th>
                    <th
                      class="table-thead-col is-only-desktop"
                      style="--p-col-width: 120"
                    >
                      <span class="eyebrow-heading-3">Date</span>
                    </th>
                    <th class="table-thead-col" style="--p-col-width: 40"></th>
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
                      <button
                        class="button is-text is-only-icon"
                        aria-label="more options"
                      >
                        <span
                          class="icon-dots-horizontal"
                          aria-hidden="true"
                        ></span>
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
                      <button
                        class="button is-text is-only-icon"
                        aria-label="more options"
                      >
                        <span
                          class="icon-dots-horizontal"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- recent transactions ends here -->
      </div>
      <!-- tab start -->
      <TabContent />
      <!-- tab ends here -->
   
  </section>
</template>
<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal {
  position: relative;
  width: 400px;
  background-color: #fff;
  padding: 20px;
  z-index: 10000;
  color: rgb(221, 14, 14);
}
</style>
