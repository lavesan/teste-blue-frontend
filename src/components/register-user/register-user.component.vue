<template>
    <div class="d-flex justify-content-center align-items-center h-100 register-user-page">
        <CForm @submit.prevent="saveUser">
            <h1 class="h3 mb-4">Cadastre-se!</h1>
            <fieldset>
                <label for="email-form">Email</label>
                <CInput
                    id="email-form"
                    type="email"
                    @input="value => onInputChange(value, 'email')"
                    :value="form.email"
                    :is-valid="!$v.form.email.$error" />
            </fieldset>
            <fieldset>
                <label for="name-form">Nome</label>
                <CInput
                    id="name-form"
                    @input="value => onInputChange(value, 'name')"
                    :value="form.name"
                    :is-valid="!$v.form.name.$error" />
            </fieldset>
            <fieldset>
                <label for="phone-form">Telefone</label>
                <CInput
                    id="phone-form"
                    type="tel"
                    @input="value => onInputChange(value, 'phone')"
                    :value="form.phone"
                    maxlength="15"
                    :is-valid="!$v.form.phone.$error" />
            </fieldset>
            <div class="d-flex justify-content-end">
                <CButton
                    color="success"
                    type="submit">
                    Salvar
                </CButton>
            </div>
        </CForm>
    </div>
</template>
<script src="./register-user.code"></script>
<style lang="scss">
@import "./register-user.styles";
</style>