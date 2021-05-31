<template>
  <div class="contact-section">
    <span class="contact-title">Contactez moi</span>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Nom</label>
    <input type="text" name="name" >
    <label>Email</label>
    <input type="email" name="email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input class="submit-btn" type="submit" value="Envoyer">
  </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_mfbj83r', 'template_b71dtvt', e.target, 'user_5g6gsJ5PQOkbXRNYeKxbt')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style>
.contact-section{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vw;
}
.contact-title{
  font-family: "PumpkinStory", sans-serif;
  font-size: 5vw;
  color: #fcacdf;
  padding: 2vw;
}
.contact-form{
  display: flex;
  width: 35vw;
  flex-direction: column;
}
label{
  font-family: "PumpkinStory", sans-serif;
  font-size: 3vw;
  color: #7D7C84;
}
input {
  height: 1.5vw;
  margin: 1vw 0;
}
.submit-btn{
  align-self: center;
  width: 25vw;
  height: 2.5vw;
  background: #fcacdf;
  font-size: 1.5vw;
  border-radius: 2rem;
  border-color: #fcacdf;
  font-family: "PumpkinStory", sans-serif;
  cursor: pointer;
}
textarea{
  min-height: 15vw;
  resize:none;
  overflow: auto;
  font-family: "poppins", sans-serif;
  font-size: 1.5vw;
}
@media (max-width:767px){
  .contact-section{
    height: 90vw;
  }
  .contact-title{
  font-size: 6.5vw;
}
  .contact-form{
  width: 70vw;
}
  label{
  font-size: 5vw;
}
input {
  height: 5vw;
  margin: 1vw 0;
}
textarea{
  min-height: 30vw;
  font-size: 4vw;
}
.submit-btn{
  width: 50vw;
  height: 10vw;
  font-size: 4vw;
  font-family: "poppins", sans-serif;
  color: white;
}
}
</style>