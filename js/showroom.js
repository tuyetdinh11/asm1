document.addEventListener("DOMContentLoaded", function () {
// Tạo biến global để lưu trữ danh sách sản phẩm sau khi đã lọc
let filteredProductList = [];

// Hàm lọc và sắp xếp sản phẩm
function filterAndSortProducts() {
  const brandFilter = document.getElementById("brand-filter").value;
  const sortOrder = document.getElementById("sort-order").value;
  console.log("Filtering and sorting products...");

  // Lọc sản phẩm theo loại xe được chọn
  filteredProductList = Array.from(document.querySelectorAll(".car-showroom")).filter((product) => {
    const brand = product.getAttribute("data-brand");
    const price = parseInt(product.getAttribute("data-price")); // Chuyển đổi sang kiểu số nguyên
    return brandFilter === "all" || brand === brandFilter;
  });

  // Sắp xếp sản phẩm nếu có yêu cầu
  filteredProductList.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));
    if (sortOrder === "high-to-low") {
      return priceB - priceA;
    } else if (sortOrder === "low-to-high") {
      return priceA - priceB;
    }
  });

  // Lấy ra các cột đã được định nghĩa trong CSS
  const columnLeft = document.querySelector(".column-left");
  const columnMiddle = document.querySelector(".column-middle");
  const columnRight = document.querySelector(".column-right");

  // Xóa nội dung hiện tại của các cột
  while (columnLeft.firstChild) {
    columnLeft.removeChild(columnLeft.firstChild);
  }

  while (columnMiddle.firstChild) {
    columnMiddle.removeChild(columnMiddle.firstChild);
  }

  while (columnRight.firstChild) {
    columnRight.removeChild(columnRight.firstChild);
  }

  // Thêm lại các sản phẩm đã sắp xếp vào các cột
  filteredProductList.forEach((product, index) => {
    if (index % 3 === 0) {
      columnLeft.appendChild(product);
    } else if (index % 3 === 1) {
      columnMiddle.appendChild(product);
    } else {
      columnRight.appendChild(product);
    }
  });
}

document.getElementById("brand-filter").addEventListener("change", () => {
  console.log("Brand filter changed");
  filterAndSortProducts();
});

document.getElementById("sort-order").addEventListener("change", () => {
  console.log("Sort order changed");
  filterAndSortProducts();
});
});