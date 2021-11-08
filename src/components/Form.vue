<template>
  <div class="form">
    <form
    >
      <h3 class="form-title">Личныe данные</h3>
      <div class="row secondName">
        <label for="secondName">Фамилия</label>
        <input 
          id="secondName" 
          v-model="formData.secondName"
          required
        >
      </div>
      <div class="row name">
        <label for="name">Имя</label>
        <input 
          id="name" 
          v-model="formData.name"
          required
        >
      </div>
      <div class="row fatherName">
        <label for="fatherName">Отчество</label>
        <input 
          id="fatherName" 
          v-model="formData.fatherName"
        >
      </div>
      <div class="row birthDate">
        <label for="birthDate">Дата рождения</label>
        <input 
          id="birthDate" 
          v-model="formData.birthDate"
          required
          placeholder="дд.мм.гггг"
          v-mask="'##.##.####'"
        >
      </div>
      <div class="row email">
        <label for="email">E-mail</label>
        <input 
          id="email" 
          v-model="formData.email"
          required
          type="email"
        >
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
          >
          <label for="sexM">Мужской</label>
        </div>
        <div class="input-group">
          <input 
            type="radio"
            id="sexF"
            name="sex"
            value="Женский"
            v-model="formData.sex"
          >
          <label for="sexF">Женский</label>
        </div>
      </div>
      <h3 class="form-title">Паспортные данные</h3>
      <div class="row passport">
        <label for="passport">Паспорт</label>
        <input 
          id="passport" 
          v-model="formData.passport"
          required
          type="passport"
        >
      </div>
      <div class="russianPassport">
        <div class="row">
          <label for="passportSeria">Серия паспорта</label>
          <input 
            id="passportSeria" 
            v-model="formData.passportSeria"
            required
            type="passportSeria"
            v-mask="'####'"
          >
        </div>
        <div class="row">
          <label for="passportNumber">Номер паспорта</label>
          <input 
            id="passportNumber" 
            v-model="formData.passportNumber"
            required
            type="passportNumber"
            v-mask="'######'"
          >
        </div>
        <div class="row">
          <label for="passportDate">Дата выдачи паспорта</label>
          <input 
            id="passportDate" 
            v-model="formData.passportDate"
            required
            placeholder="дд.мм.гггг"
            v-mask="'##.##.####'"
          >
        </div>
      </div>
      <div class="abroadPassport">
        <div class="row latSecondName">
          <label for="latSecondName">Фамилия на латинице</label>
          <input 
            id="latSecondName" 
            v-model="formData.latSecondName"
            required
          >
        </div>
        <div class="row latName">
          <label for="latName">Имя на латинице</label>
          <input 
            id="latName" 
            v-model="formData.latName"
            required
          >
        </div>
        <div class="form-text">Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan</div>
        <div class="row abroadPassportNumber">
          <label for="abroadPassportNumber">Номер паспорта</label>
          <input 
            id="abroadPassportNumber" 
            v-model="formData.abroadPassportNumber"
            required
            type="abroadPassportNumber"
          >
        </div>
        <div class="row abroadPassportCountry">
          <label for="abroadPassportCountry">Страна выдачи</label>
          <input 
            id="abroadPassportCountry" 
            v-model="formData.abroadPassportCountry"
            required
            type="abroadPassportCountry"
          >
        </div>
        <div class="row abroadPassportType">
          <label for="abroadPassportType">Тип паспорта</label>
          <input 
            id="abroadPassportType" 
            v-model="formData.abroadPassportType"
            required
          >
        </div>
      </div>
      <div class="row isSecondNameWasChanged">
        <span class="input-title">Меняли ли фамилию или имя?</span>
        <div class="input-group">
          <input 
            type="radio"
            id="isSecondNameWasChangedY"
            name="isSecondNameWasChanged"
            value="false"
            v-model="formData.isSecondNameWasChanged"
          >
          <label for="isSecondNameWasChangedY">Нет</label>
        </div>
        <div class="input-group">
          <input 
            type="radio"
            id="isSecondNameWasChangedM"
            name="isSecondNameWasChanged"
            value="true"
            v-model="formData.isSecondNameWasChanged"
          >
          <label for="isSecondNameWasChangedM">Да</label>
        </div>
      </div>
      <div class="changeSecondName">
        <div class="row oldSecondName">
          <label for="oldSecondName">Предыдущая Фамилия</label>
          <input 
            id="oldSecondName" 
            v-model="formData.oldSecondName"
            required
          >
        </div>
        <div class="row oldName">
          <label for="oldName">Предыдущее Имя</label>
          <input 
            id="oldName" 
            v-model="formData.oldName"
            required
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueMaskDirective } from "v-mask";

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
        passport: "",
        passportSeria: "",
        passportNumber: "",
        passportDate: "",
        latSecondName: "",
        latName: "",
        abroadPassportNumber: "",
        abroadPassportCountry: "",
        abroadPassportType: "",
        isSecondNameWasChanged: "",
        oldSecondName: "",
        oldName: "",
      }
    };
  },
  methods: {},
  directives: {
    mask: VueMaskDirective,
  },
};
</script>

<style scoped>
.form {
  margin: 50px 0;
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
  transition: .2s;
  width: 100%;
}
input[type="radio"] {
  width: auto;
}
input:focus {
  outline: none;
  border-color: #2459f5;
}
.form form{
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
.passport {
  grid-column: 1/4;
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
</style>
