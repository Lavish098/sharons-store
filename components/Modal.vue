<template>
  <div class="modal">
      <div class="modal-content">
          <p>{{ this.modalMessage }}</p>
          <button @click="closeModal">Close</button>
      </div>
  </div>
</template>

<script>
export default {
props:['modalMessage'],
methods:{
    closeModal(){
        this.$emit("close-modal")
    }
}
}
</script>

<style scoped>
.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
}
.modal .modal-content{
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;
}
.modal-content p{
    font-size: 25px;
    text-align: center;
}
.modal-content button{
    align-self: center;
}
.modal-content button{
    color: #3398ff;
        border: 2px solid #3398ff;
        margin-top: 10px;
        padding: 15px 35px;
        border-radius: 5px;
        font-size: 20px;
}
</style>