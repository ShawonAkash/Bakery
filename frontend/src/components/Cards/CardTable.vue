<template>
  <div
    class="
      relative
      flex flex-col
      min-w-0
      break-words
      w-full
      mb-6
      shadow-lg
      rounded
    "
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            Card Tables
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            >
              Project
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            >
              Budget
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            >
              Status
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            >
              Users
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            >
              Completion
            </th>
            <th
              class="
                px-6
                align-middle
                border border-solid
                py-3
                text-xs
                uppercase
                border-l-0 border-r-0
                whitespace-nowrap
                font-semibold
                text-left
              "
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700'
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-left
                flex
                items-center
              "
            >
              <img
                :src="bootstrap"
                class="h-12 w-12 bg-white rounded-full border"
                alt="..."
              />
              <span
                class="ml-3 font-bold"
                :class="[
                  color === 'light' ? 'text-blueGray-600' : 'text-white'
                ]"
              >
                Argon Design System
              </span>
            </th>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              $2,500 USD
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <i class="fas fa-circle text-orange-500 mr-2"></i> pending
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex">
                <img
                  :src="team1"
                  alt="..."
                  class="
                    w-10
                    h-10
                    rounded-full
                    border-2 border-blueGray-50
                    shadow
                  "
                />
                <img
                  :src="Akash"
                  alt="..."
                  class="
                    w-10
                    h-10
                    rounded-full
                    border-2 border-blueGray-50
                    shadow
                    -ml-4
                  "
                />
                <img
                  :src="team3"
                  alt="..."
                  class="
                    w-10
                    h-10
                    rounded-full
                    border-2 border-blueGray-50
                    shadow
                    -ml-4
                  "
                />
                <img
                  :src="team4"
                  alt="..."
                  class="
                    w-10
                    h-10
                    rounded-full
                    border-2 border-blueGray-50
                    shadow
                    -ml-4
                  "
                />
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
              "
            >
              <div class="flex items-center">
                <span class="mr-2">60%</span>
                <div class="relative w-full">
                  <div
                    class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                  >
                    <div
                      style="width: 60%"
                      class="
                        shadow-none
                        flex flex-col
                        text-center
                        whitespace-nowrap
                        text-white
                        justify-center
                        bg-red-500
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </td>
            <td
              class="
                border-t-0
                px-6
                align-middle
                border-l-0 border-r-0
                text-xs
                whitespace-nowrap
                p-4
                text-right
              "
            >
              <table-dropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TableDropdown from '@/components/Dropdowns/TableDropdown.vue'

import bootstrap from '@/assets/img/bootstrap.jpg'
import angular from '@/assets/img/angular.jpg'
import sketch from '@/assets/img/sketch.jpg'
import react from '@/assets/img/react.jpg'
import vue from '@/assets/img/react.jpg'

import team1 from '@/assets/img/team-1-800x800.jpg'
import Akash from '../../assets/img/akash.png'
import team3 from '@/assets/img/team-3-800x800.jpg'
import team4 from '@/assets/img/team-4-470x470.png'

export default {
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      Akash,
      team3,
      team4
    }
  },
  components: {
    TableDropdown
  },
  props: {
    color: {
      default: 'light',
      validator: function (value) {
        // The value must match one of these strings
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  }
}
</script>
