import { ProductCategory, allProductsCategory } from '@/shared/types/product-category'
import { InputField } from '@/shared/ui/input-field'
import { SelectField } from '@/shared/ui/select-field'
import { RootState } from '@/store'
import { changeFilters } from '@/store/products'
import { useDispatch, useSelector } from 'react-redux'

export function ProductFilters() {
  const filters = useSelector((state: RootState) => state.products.filters)
  const dispatch = useDispatch()

  return (
    <div className="mb-4">
      <span className="text-xl font-medium">Фильтры</span>
      <div className="mt-1 flex flex-col gap-4 sm:flex-row">
        <InputField
          placeholder="Строка поиска..."
          label="Строка поиска"
          onChange={(event) =>
            dispatch(
              changeFilters({
                query: event.target.value,
                producatCategory: filters.producatCategory,
              })
            )
          }
        />
        <SelectField
          value={!filters.producatCategory ? 'all' : filters.producatCategory}
          label="Выберете категорию"
          onChange={(event) => {
            const value = event.target.value
            dispatch(
              changeFilters({
                query: filters.query,
                producatCategory: value === 'all' ? null : (value as ProductCategory),
              })
            )
          }}
        >
          <option value="all">All category</option>
          {allProductsCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </SelectField>
      </div>
    </div>
  )
}
