// .../domain/product.rules.spec.ts
import { ProductRules } from '../../app/features/products/domain/product.rules';
import { Product } from '../../app/features/products/models/product.model';

describe('ProductRules (unit tests)', () => {
  let product: Product;

  // 1. Arrange
  beforeEach(() => {
    product = {
      id: 1,
      name: 'Potion',
      description: 'yolo',
      imageUrl:'j en ai aucune idée',
      category: 'gaming',
      rating:5,
      price: 100,
      stock: 0,
      inStock: true
    };
  });

  it('should apply discount correctly', () => {
    // 2. Act
    const discounted = ProductRules.applyDiscount(product, 50);
    // 3. Assert
    expect(discounted.price).toBe(50);
  });

  it('should throw error if discount < 0 or > 100', () => {
    // 2 & 3 : Act & Assert
    expect(() => ProductRules.applyDiscount(product, -10)).toThrowError();
    // 2 & 3 : Act & Assert
    expect(() => ProductRules.applyDiscount(product, 150)).toThrowError();
  });

  it('should return false if stock is 0', () => {
    // 2. Act
    const result = ProductRules.canBeOrdered({ ...product, stock: 0 });
    // 3. Assert
    expect(result).toBeFalse();
  });

  it('should throw error if price <= 0', () => {
    // 2. Act
    const invalid = { ...product, price: 0 };
    // 3. Assert
    expect(() => ProductRules.validate(invalid)).toThrowError('Price must be greater than 0');
  });

  it('should throw error if stock < 0', () => {
    // 2. Act
    const invalid = { ...product, stock: -1 };
    // 3. Assert
    expect(() => ProductRules.validate(invalid)).toThrowError('Stock cannot be negative');
  });
});
