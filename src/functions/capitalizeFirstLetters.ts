const capitalizeFirstLetters = (expression: string) => {
      const splittedExpression = expression.split(" ");
      const displayedCategoryArray = splittedExpression.map(
        (word) => word[0].toUpperCase() + word.slice(1)
      );
      return displayedCategoryArray.join(" ");

}

export default capitalizeFirstLetters;