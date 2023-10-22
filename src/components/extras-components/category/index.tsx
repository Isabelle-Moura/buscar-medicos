// Style
import * as S from './style';

// Component Type
interface Props {
   name: string;
   total?: number;
   onCategoryChange: (categoryName: string) => void;
}

// ---

const Category = ({ name, total, onCategoryChange }: Props) => {
   // Function called when clicking on the category
   const handleCategoryClick = () => {
      onCategoryChange(name); // Call the onCategoryChange function with the category name as argument
   };

   return (
      <>
         <S.Container tabIndex={0} className="active-background" onClick={handleCategoryClick}>
            <S.StyledName className="active-name">{name}</S.StyledName> {/* Category name */}
            <S.StyledTotal className="active-total">{total}</S.StyledTotal> {/* Total items (if provided) */}
         </S.Container>
      </>
   );
};

export default Category;
