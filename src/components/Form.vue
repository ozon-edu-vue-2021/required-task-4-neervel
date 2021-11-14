<template>
  <div class="form">
    <form @submit.prevent="sendData">
      <h3 class="form-title">Личныe данные</h3>
      <div class="row secondName">
        <label for="secondName">Фамилия</label>
        <input
          id="secondName"
          v-model="formData.secondName"
          required
          v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        />
      </div>
      <div class="row name">
        <label for="name">Имя</label>
        <input
          id="name"
          v-model="formData.name"
          required
          v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        />
      </div>
      <div class="row fatherName">
        <label for="fatherName">Отчество</label>
        <input
          id="fatherName"
          v-model="formData.fatherName"
          v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
        />
      </div>
      <div class="row birthDate">
        <label for="birthDate">Дата рождения</label>
        <input
          id="birthDate"
          v-model="formData.birthDate"
          required
          placeholder="дд.мм.гггг"
          v-mask="'##.##.####'"
        />
      </div>
      <div class="row email">
        <label for="email">E-mail</label>
        <input id="email" v-model="formData.email" required type="email" />
      </div>
      <div class="row sex">
        <span class="input-title">Пол</span>
        <div class="input-group">
          <input
            type="radio"
            id="sexM"
            name="sex"
            value="Мужской"
            v-model="formData.sex"
          />
          <label for="sexM">Мужской</label>
        </div>
        <div class="input-group">
          <input
            type="radio"
            id="sexF"
            name="sex"
            value="Женский"
            v-model="formData.sex"
          />
          <label for="sexF">Женский</label>
        </div>
      </div>
      <h3 class="form-title">Паспортные данные</h3>
      <div class="row citizen" v-click-outside="closeSitizenList">
        <label for="citizen">Гражданство</label>
        <input
          id="citizen"
          v-model="searchWord"
          @click="isSitizenListOpen = true"
        />
        <ul class="citizen-list" v-if="isSitizenListOpen">
          <li
            v-for="citizenship in allCitizens"
            :value="citizenship.nationality"
            :key="citizenship.id"
            @click="onCitizenClick(citizenship)"
          >
            {{ citizenship.nationality }}
          </li>
        </ul>
      </div>
      <div class="russianPassport" v-if="formData.citizen === 'Russia'">
        <div class="row">
          <label for="passportSeria">Серия паспорта</label>
          <input
            id="passportSeria"
            v-model="formData.passportSeria"
            required
            v-mask="'####'"
          />
        </div>
        <div class="row">
          <label for="passportNumber">Номер паспорта</label>
          <input
            id="passportNumber"
            v-model="formData.passportNumber"
            required
            v-mask="'######'"
          />
        </div>
        <div class="row">
          <label for="passportDate">Дата выдачи паспорта</label>
          <input
            id="passportDate"
            v-model="formData.passportDate"
            required
            placeholder="дд.мм.гггг"
            v-mask="'##.##.####'"
          />
        </div>
      </div>
      <div
        v-else-if="formData.citizen !== 'Russia' && formData.citizen"
        class="abroadPassport"
      >
        <div class="row latSecondName">
          <label for="latSecondName">Фамилия на латинице</label>
          <input
            id="latSecondName"
            v-model="formData.latSecondName"
            required
            v-mask="'AAAAAAAAAAAAAAAAAAAAAAAAA'"
          />
        </div>
        <div class="row latName">
          <label for="latName">Имя на латинице</label>
          <input
            id="latName"
            v-model="formData.latName"
            required
            v-mask="'AAAAAAAAAAAAAAAAAAAAAAAAA'"
          />
        </div>
        <div class="form-text">
          Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan
        </div>
        <div class="row abroadPassportNumber">
          <label for="abroadPassportNumber">Номер паспорта</label>
          <input
            id="abroadPassportNumber"
            v-model="formData.abroadPassportNumber"
            required
          />
        </div>
        <div class="row abroadPassportCountry">
          <label for="abroadPassportCountry">Страна выдачи</label>
          <input
            id="abroadPassportCountry"
            v-model="formData.abroadPassportCountry"
            required
            type="abroadPassportCountry"
          />
        </div>
        <div class="row abroadPassportType">
          <label for="abroadPassportType">Тип паспорта</label>
          <select
            id="abroadPassportType"
            v-model="formData.abroadPassportType"
            required
          >
            <option
              :value="passport.type"
              v-for="passport in passportTypes"
              :key="passport.id"
            >
              {{ passport.type }}
            </option>
          </select>
        </div>
      </div>
      <div class="row isSecondNameWasChanged">
        <span class="input-title">Меняли ли фамилию или имя?</span>
        <div class="input-group">
          <input
            type="radio"
            id="isSecondNameWasChangedY"
            name="isSecondNameWasChanged"
            :value="false"
            v-model="formData.isSecondNameWasChanged"
          />
          <label for="isSecondNameWasChangedY">Нет</label>
        </div>
        <div class="input-group">
          <input
            type="radio"
            id="isSecondNameWasChangedM"
            name="isSecondNameWasChanged"
            :value="true"
            v-model="formData.isSecondNameWasChanged"
          />
          <label for="isSecondNameWasChangedM">Да</label>
        </div>
      </div>
      <div v-if="formData.isSecondNameWasChanged" class="changeSecondName">
        <div class="row oldSecondName">
          <label for="oldSecondName">Предыдущая Фамилия</label>
          <input
            id="oldSecondName"
            v-model="formData.oldSecondName"
            required
            v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
          />
        </div>
        <div class="row oldName">
          <label for="oldName">Предыдущее Имя</label>
          <input
            id="oldName"
            v-model="formData.oldName"
            required
            v-mask="'ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ'"
          />
        </div>
      </div>
      <div class="row submit">
        <button class="btn">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import citizens from "../assets/data/citizenships.json";
import passportTypes from "../assets/data/passport-types.json";
import ClickOutside from "vue-click-outside";
import { debounce } from "../helpres/debounce.js";

export default {
  data() {
    return {
      formData: {
        secondName: "",
        name: "",
        fatherName: "",
        birthDate: "",
        email: "",
        sex: "",
        citizen: "",
        passportSeria: "",
        passportNumber: "",
        passportDate: "",
        latSecondName: "",
        latName: "",
        abroadPassportNumber: "",
        abroadPassportCountry: "",
        abroadPassportType: "",
        isSecondNameWasChanged: false,
        oldSecondName: "",
        oldName: "",
      },
      allCitizens: citizens,
      isSitizenListOpen: false,
      searchWord: "",
      debouncedSearchCitizens: null,
      passportTypes: passportTypes,
    };
  },
  created() {
    this.debouncedSearchCitizens = debounce(this.getCitizens, 1000);
  },
  watch: {
    searchWord(newValue) {
      this.debouncedSearchCitizens(newValue);
    },
  },
  methods: {
    closeSitizenList() {
      this.isSitizenListOpen = false;
    },
    onCitizenClick(citizen) {
      this.formData.citizen = citizen.nationality;
      this.searchWord = citizen.nationality;
      this.closeSitizenList();
    },
    getCitizens(searchWord) {
      console.log("FETCH SKILLS: GET SKILLS FROM API ", searchWord);
      this.allCitizens = citizens.filter((citizen) =>
        citizen.nationality.includes(searchWord)
      );
    },
    sendData() {
      if (this.checkDate()) {
        console.log(JSON.stringify(this.formData));
      } else {
        document.getElementById("birthDate").classList.add("error");
        console.log("error");
      }
    },
    checkDate() {
      let birthDate = new Date(
        +this.dateArray[2],
        this.dateArray[1] - 1,
        +this.dateArray[0]
      );
      let nowDate = new Date();
      return nowDate > birthDate ? 1 : 0;
    },
  },
  directives: {
    ClickOutside,
  },
  computed: {
    dateArray() {
      return this.formData.birthDate.split(".");
    },
  },
};
</script>

<style scoped>
.form {
  margin: 50px 0;
  display: flex;
  justify-content: center;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #91969b;
  font-size: 14px;
}
input {
  height: 40px;
  padding: 0 10px;
  border-radius: 3px;
  border: 2px solid #d9dfe4;
  transition: 0.2s;
  width: 100%;
}
input[type="radio"] {
  width: auto;
}
input:focus {
  outline: none;
  border-color: #2459f5;
}
input.error {
  border-color: red;
}
.form form {
  display: grid;
  grid-template-columns: repeat(6, 100px);
  row-gap: 20px;
  column-gap: 20px;
}
.form-title {
  grid-column: 1/7;
  margin: 0;
}
.secondName {
  grid-column: 1/3;
}
.name {
  grid-column: 3/5;
}
.fatherName {
  grid-column: 5/7;
}
.birthDate {
  grid-column: 1/4;
}
.email {
  grid-column: 1/7;
}
.sex {
  grid-column: 1/7;
}
.input-group {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
}
.input-group label {
  margin-bottom: 0;
  margin-left: 7px;
}
.input-title {
  display: block;
}
.citizen {
  grid-column: 1/4;
  position: relative;
}
.citizen-list {
  position: absolute;
  top: 50px;
  list-style: none;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid gray;
}
.citizen-list li {
  cursor: pointer;
  margin: 5px 0;
  display: block;
}
.citizen-list li:hover {
  color: #000;
}
.russianPassport {
  grid-column: 1/7;
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
.abroadPassport {
  grid-column: 1/7;
  row-gap: 20px;
  column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.latSecondName {
  grid-column: 1/4;
}
.latName {
  grid-column: 4/7;
}
.form-text {
  grid-column: 1/7;
}
.abroadPassportNumber {
  grid-column: 1/3;
}
.abroadPassportCountry {
  grid-column: 3/5;
}
.abroadPassportType {
  grid-column: 5/7;
}
.isSecondNameWasChanged {
  grid-column: 1/7;
}
.changeSecondName {
  grid-column: 1/7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
}
.submit {
  grid-column: 1/7;
}
button {
  padding: 15px 40px;
  color: #fff;
  background-color: #2459f6;
  border: none;
  border-radius: 3px;
  font-weight: 500;
  display: block;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
}
select {
  height: 40px;
  padding: 0 10px;
  border-radius: 3px;
  border: 2px solid #d9dfe4;
  background-color: transparent;
}

@media screen and (max-width: 768px) {
  .form form {
    grid-template-columns: repeat(1, 350px);
  }
  .row {
    grid-column: 1/7 !important;
  }
}

@media screen and (max-width: 480px) {
  .form form {
    grid-template-columns: repeat(1, 200px);
  }
}
</style>
