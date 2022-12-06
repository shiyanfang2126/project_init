import { defineStore } from 'pinia'

interface IAppState {
  errorMessage: string
  successMessage: string
  loading: boolean
}

export const appState = defineStore('app', {
  state: () =>
    <IAppState>{
      errorMessage: '',
      successMessage: '',
      loading: false,
    },
  actions: {
    insertErrorMessage(msg: string) {
      this.errorMessage = msg
    },
    clearErrorMessage() {
      this.errorMessage = ''
    },
    insertSuccessMessage(msg: string) {
      this.successMessage = msg
    },
    clearSuccessMessage() {
      this.successMessage = ''
    },
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    },
  },
})
