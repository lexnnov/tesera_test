export const state = () => ({
  comments: {},
  gameInfo: '',
  fullyLoaded: false
})

export const mutations = {
  ADD_COMMENT (state, commentData) {
    const newQwert = Object.assign({}, state.comments)
    newQwert[commentData.gameId].comments = [commentData.comment, ...state.comments[commentData.gameId].comments]
    state.comments = newQwert
  },
  GET_GAME_COMMENTS (state, comments) {
    const gameId = state.gameInfo.game.teseraId

    if (gameId in state.comments) {
      state.comments[gameId].comments = { ...state.comments[gameId].comments }
    } else {
      state.comments[gameId] = {
        gameId,
        comments
      }
    }
  },
  GET_GAME_INFO (state, text) {
    state.gameInfo = text
  },
  SET_GAME_LOADED_STATE (state, text) {
    state.fullyLoaded = text
  },
  CLEAR_LAST_GAME_INFO (state) {
    state.gameInfo = ''
  }
}

export const actions = {
  async getGame ({ commit }, state) {
    commit('SET_GAME_LOADED_STATE', false)
    commit('CLEAR_LAST_GAME_INFO')

    await fetch(`https://api.tesera.ru/games/${state.self}`
    ).then(res => res.json()
    ).then((gameInfo) => {
      commit('GET_GAME_INFO', gameInfo)
    })

    await fetch('https://private-9c71eb-teseratest.apiary-mock.com/opinions'
    ).then(res => res.json()
    ).then((comments) => {
      commit('GET_GAME_COMMENTS', comments)
    }
    ).then(() => {
      commit('SET_GAME_LOADED_STATE', true)
    })
  }
}
