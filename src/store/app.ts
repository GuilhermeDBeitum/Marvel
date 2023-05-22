// Utilities
import { defineStore } from 'pinia'
import axios from "axios";

const timestamp = "1684607322072";
const apiKey = "bff8a7f473abdaf7cf744ad154542739";
const md5 = "99ba99f1aa9b3c35f3d2d439f8b62f0b";

interface State {
  characterData: CharacterData[]
  pagination: Pagination
  search: string
  select: string
}

interface CharacterData {
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface Pagination {
  page: number
  rowPerPage: number
  totalItems: number
}

export const AppStore = defineStore('app', {
  state: (): State => {
    return {
      characterData: [],
      pagination: {
        page: 0,
        rowPerPage: 20,
        totalItems: 0
      },
      search: '',
      select: ''
    }
  },
  actions: {
    async getCharacters() {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
      const items = response.data.data.results
      this.paginateCharacter(items)
      this.characterData.filter((item) => {
        return item.thumbnail.path = item.thumbnail.path + '.' + item.thumbnail.extension
      })
      this.select = 'getCharacters'
    },

    async searchCharacter() {
      const response = axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.search}&ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
      const items = (await response).data.data.results
      this.paginateCharacter(items)
      this.characterData.filter((item) => {
        return item.thumbnail.path = item.thumbnail.path + '.' + item.thumbnail.extension
      })
      this.select = 'searchCharacter'
    },

    paginateCharacter(items: CharacterData[]) {
      this.pagination.totalItems = items.length
      this.pagination.page - 1 < 0 ? this.pagination.page = 0 : this.pagination.page = this.pagination.page - 1
      this.characterData = items.slice(this.pagination.page * this.pagination.rowPerPage, (this.pagination.page + 1) * this.pagination.rowPerPage)
      this.pagination.page = this.pagination.page + 1
    }
  }
})


