interface CategoryProps {
  params: {
    category: string;
  }
}
export default function Category(props: CategoryProps) {
  console.log(props)
  const { category } = props.params
  return (
    <h1>Dynamic Category: {category}</h1>
  )
}