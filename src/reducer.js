export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return {
        ...state,
        countryList: action.payload
      };
    }

    case "SET_COUNTRY_BY_NAME": {
      const countryListByName = (state.countryList || []).filter(country =>
        country.name.toLocaleLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        countryListByName
      };
    }

    case "FILTER_BY_REGION": {
      const { regionSelected } = action.payload;

      if ("" === regionSelected) {
        return { ...state, countryFilteredByRegion: [], filterByRegion: "" };
      }

      const countryFilteredByRegion = state.countryList.filter(
        country => country.region === regionSelected
      );

      return {
        ...state,
        countryFilteredByRegion,
        filterByRegion: regionSelected
      };
    }

    default: {
      return state;
    }
  }
}
