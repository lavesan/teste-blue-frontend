import userInstance from '../../services/user.service';
import {
    required,
    email,
  } from "vuelidate/lib/validators";
import { characterRegex, phoneRegex } from '../../helpers/validations.helpers';
import { phoneMask } from '../../helpers/mask.helpers';
import { CInput, CForm, CContainer, CCol, CRow, CButton } from '@coreui/vue';

export default {
    name: 'RegisterUser',
    components: {
        CCol,
        CRow,
        CForm,
        CInput,
        CButton,
        CContainer,
    },
    mounted() {
        this.$v.form.$touch();
    },
    data() {
        return {
            userService: userInstance.getInstance(),
            form: {
                name: '',
                email: '',
                phone: '',
            },
            loading: false,
        }
    },
    validations: {
        form: {
            name: {
                required,
                validateName(name) {
                  return characterRegex.test(name);
                },
            },
            email: {
                required,
                email,
            },
            phone: {
                required,
                validatePhone(phone) {
                    return phoneRegex.test(phone);
                },
            },
        },
    },
    methods: {
        onInputChange(value, name) {

            if (name === 'phone') {
                this.form[name] = phoneMask(value);
            } else {
                this.form[name] = value;
            }

        },
        clearForm() {

            const entries = Object.keys(this.form);
            entries.forEach(key => {
                this.form[key] = '';
            });

        },
        async saveUser() {

            this.loading = true;
            if (this.$v.form.$pending || this.$v.form.$error) {
                this.loading = false;
                return;
            }

            const onlyNumberPhone = this.form.phone.replace(/\D/g, '');
            const ddd = onlyNumberPhone.match(/^\d{2}/)[0];
            const phoneNumber = onlyNumberPhone.match(/\d{9}$/)[0];

            const body = {
                Email: this.form.email,
                Name: this.form.name,
                Ddd: ddd,
                PhoneNumber: phoneNumber,
            }

            await this.userService.save(body)
                .then(() => {
                    this.clearForm();
                    this.$toast.open({
                        type: 'success',
                        message: 'Seus dados foram salvos com sucesso!',
                    });
                })
                .catch(() => {
                    this.$toast.open({
                        type: 'error',
                        message: 'Infelizmente aconteceu um erro interno, por favor tente mais tarde :/',
                    });
                    console.log('caiu no err');
                });

            this.loading = false;

        },
    },
}