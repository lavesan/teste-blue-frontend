import userInstance from '../../services/user.service';
import { validationMixin } from "vuelidate";
import {
    required,
    email,
    email,
  } from "vuelidate/lib/validators";
import { characterRegex, phoneRegex } from '../../helpers/validations.helpers';
import { CInput } from '@coreui/coreui';

export default {
    mixins: [validationMixin],
    components: {
        CInput,
    },
    data() {
        return {
            userService: userInstance.getInstance(),
            form: {
                name: '',
                email: '',
                phone: '',
            },
        }
    },
    validations: {
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
}