import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    changeSearchInput,
    resetAppliedFilters,
    enterSearchInput,
  } = props

  const renderRatingsFiltersList = () => {
    const {ratingsList, activeRatingId, updateRatingId} = props

    return ratingsList.map(eachRating => {
      const isRatingActive = eachRating.ratingId === activeRatingId
      const ratingClassName = isRatingActive ? 'active-and-up' : 'and-up'
      const onClickRatingItem = () => updateRatingId(eachRating.ratingId)

      return (
        <li
          className="rating-item"
          key={eachRating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            className="rating-img"
            src={eachRating.imageUrl}
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingsFiltersList()}</ul>
    </>
  )

  const renderCategoriesList = () => {
    const {categoryOptions, activeCategoryId, updateCategoryId} = props

    return categoryOptions.map(eachCategory => {
      const isCategoryActive = eachCategory.categoryId === activeCategoryId
      const categoryClassName = isCategoryActive
        ? 'active-category-name'
        : 'category-name'
      const onClickCategoryItem = () =>
        updateCategoryId(eachCategory.categoryId)
      return (
        <li
          className="category-item"
          onClick={onClickCategoryItem}
          key={eachCategory.categoryId}
        >
          <p className={categoryClassName}>{eachCategory.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoriesList()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          className="search-input"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onKeyDownSearchInput}
          type="search"
        />
        <BsSearch className="search-icon" />
      </div>
      {renderProductCategories()}
      {renderRatingsFilters()}

      <button
        className="clear-button"
        onClick={resetAppliedFilters}
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
