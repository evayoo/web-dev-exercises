<script setup>
import {ref, computed} from 'vue';
const flightMode = ref('OneWay');

const firstDate = ref(new Date().toISOString().toUpperCase().split("T")[0])
const secondDate = ref(firstDate.value)
// function selectFlight(event){
//   console.table(event.target.value);
//   flightMode.value = event.target.value
// }

const isFirstDateAfterSecond = computed(() => {
  return isoDateStringToDate(firstDate.value) > isoDateStringToDate(secondDate.value)})

function isoDateStringToDate(isoDateString){
  const [year, month, day] = isoDateString.split("-")
  return new Date(year, month-1, day)
} 

// function bookFlight (e){
//   if (flightMode === "OneWay") {
//     alert("You have booked a one-way flight leaving on ..")
//   } else {
//     "You have booked a return flight leaving on .. and returning on .."
//   }
// }

function bookFlight(e){
  const message = flightMode.value === "OneWay"?
  `You have booked a one-way flight leaving on ${firstDate.value}.` :
  `You have booked a return flight leaving on ${firstDate.value} and returning on ${secondDate.value}.`
    alert(message)
}


console.log('rendering', flightMode.value)
</script>

<template>
    <main>
        <form @submit.prevent="bookFlight">
          <div>{{ flightMode }}</div>
            <select v-model="flightMode">
                <option value="OneWay">One Way Flight</option>
                <option value="Return">Return Flight</option>
            </select>
            <input type="date" v-model="firstDate"/>
            <input type="date" v-model="secondDate" :disabled="flightMode !== 'Return'" />
            <button :disabled="flightMode === 'Return' && isFirstDateAfterSecond">Book</button>
            <p v-show="isFirstDateAfterSecond">The return date should be later than departure date</p>
        </form>
    </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>