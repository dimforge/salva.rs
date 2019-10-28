Constructeur de Cuboid: Cuboid::new(hx, hy, hz)
Add illustration for polylines
Shape::subshape_transform -> Shape::shape_part_transform
Remove the ContactAlgorithm alias.
Rename ContactsQuery -> ContactQuery (because we already use ProximityQuery, i.e., in singular.)
Unit<T> * Scalar -> T
Add a method to retrieve the body attached to a collider with one method (world.body_from_collider(handle)).

nalgebra doc: Specify the conversion exists for both Matrix4 -> [N; 16] and Matrix4 -> [[N; 4]; 4].
nalgebra: rename MatrixVec -> VecStorage, MatrixArray -> ArrayStorage to avoid confusion (cf. https://discourse.salva.rs/t/inverse-of-dynamic-matrix/209/3).
nalgebra: implement multiplication Unit<T> * Scalar -> T
Rename `body` -> `body_part`.
nalgebra: add `.component_add_scalar` to add a scalar to all components of a matrix.