import { ProductCategory, allProductsCategory } from '@/shared/types/product-category'
import { Button } from '@/shared/ui/button'
import { InputField } from '@/shared/ui/input-field'
import { SelectField } from '@/shared/ui/select-field'
import { addProduct } from '@/store/products'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { isImageUrl } from '../lib/is-image-url'

export function AddProductForm() {
  //  Не стал использовать сторонние библиотеки для форм (react-hook-forms) поэтому вышло как-то громоздко
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState<string | null>(null)
  const [category, setCategory] = useState<ProductCategory>('Clothing')
  const [unitPrice, setUnitPrice] = useState(5)
  const [unitPriceError, setUnitPriceError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [quantityError, setQuantityError] = useState<string | null>(null)
  const [photoUrl, setPhotoUrl] = useState('')
  const [photoUrlError, setPhotoUrlError] = useState<string | null>(null)

  const onSave = () => {
    let hasError = false

    if (name.trim().length === 0) {
      setNameError('Название товара не должно быть пустым')
      hasError = true
    }
    if (unitPrice <= 0) {
      setUnitPriceError('Цена должна быть больше нуля')
      hasError = true
    }
    if (quantity <= 0) {
      setQuantityError('Количество дожно быть больше нуля')
      hasError = true
    }
    const img = photoUrl.trim().length !== 0 ? photoUrl : null
    if (img && !isImageUrl(img)) {
      setPhotoUrlError('Некорректный url фото')
      hasError = true
    }

    if (!hasError) {
      dispatch(addProduct({ category, name, quantity, unitPrice, img: img ? img : undefined }))
      setName('')
      setCategory('Clothing')
      setUnitPrice(5)
      setQuantity(1)
      setPhotoUrl('')
    }
  }

  return (
    <div>
      <h3 className="title my-4">Добавить товар</h3>
      <form className="flex flex-col gap-2 sm:w-96">
        <InputField
          label="Название*"
          placeholder="Штаны..."
          value={name}
          error={nameError}
          onChange={(event) => {
            setName(event.target.value)
            setNameError(null)
          }}
        />
        <SelectField
          label="Категория*"
          value={category}
          onChange={(event) => setCategory(event.target.value as ProductCategory)}
        >
          {allProductsCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </SelectField>
        <InputField
          label="Цена*"
          type="number"
          placeholder="40 грв"
          min={1}
          max={1000}
          value={unitPrice}
          error={unitPriceError}
          onChange={(event) => {
            setUnitPrice(+event.target.value)
            setUnitPriceError(null)
          }}
        />
        <InputField
          label="Количество*"
          type="number"
          placeholder="5"
          min={1}
          max={1000}
          value={quantity}
          error={quantityError}
          onChange={(event) => {
            setQuantity(+event.target.value)
            setQuantityError(null)
          }}
        />
        <InputField
          label="URL изображения"
          placeholder="https://photo.com/shtani.png"
          value={photoUrl}
          error={photoUrlError}
          onChange={(event) => {
            setPhotoUrl(event.target.value)
            setPhotoUrlError(null)
          }}
        />
        <Button className="mt-4" onClick={onSave}>
          Добавить
        </Button>
      </form>
    </div>
  )
}
