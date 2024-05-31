
export class agCofigrations {

  public gridApi;
  public gridColumnApi;

  filter: any;
  surce: any;
  fuction: any;
  PagenationData: any;

  rowData: any = [];

  icons = {
    sortAscending: '<i class="fa-solid fa-arrow-up"></i>',
    sortDescending: '<i class="fa-solid fa-arrow-down"></i>',
    sortUnSort: '<i style="transform: rotate(90deg)" class="fa-solid fa-arrow-right-arrow-left"></i>',
    first: '<i class="fa-solid fa-angles-right"></i>',
    previous: '<i class="fa-solid fa-caret-right"></i>',
    next: '<i class="fa-solid fa-caret-left"></i>',
    last: '<i class="fa-solid fa-angles-left"></i>',
  }

  public defaultColDef = {
    resizable: false,
    flex: 1,
    sortable: true,
    unSortIcon: true,
    filter: false,
  };

  public GridDataSurce(filter, surce, fuction) {
    this.filter = filter;
    this.surce = surce;
    this.fuction = fuction;

    return new Promise((reject, resolve) => {

      const requst = filter == null ? surce[fuction] : surce[fuction](filter);

      requst
        .subscribe({
          next: (res) => {

            this.rowData = res.data.results;

            this.PagenationData = Object.assign({}, res.data);
            delete this.PagenationData.results;
            if (this.rowData.length != 0)
              setTimeout(() => this.setPageText(), 50);
            reject(res);
          },
          error: () => resolve()
        })
    })

  }

  public RefreshData() {
    this.GridDataSurce(this.filter, this.surce, this.fuction);
  }

  setPageText() {

    document.getElementsByClassName("ag-paging-row-summary-panel")[0].innerHTML = `<p class="p-font fw-bold">${this.PagenationData.totalResults} : إجمالي النتائج</p>`;
    document.getElementsByClassName("ag-paging-description")[0].innerHTML = `<p class="p-font fw-bold">صفحة ${this.PagenationData.currentPage} من ${this.PagenationData.totalPages}</p>`;
  }

  public onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    document.getElementsByClassName("ag-paging-row-summary-panel")[0].innerHTML = `<p class="p-font fw-bold">0 : إجمالي النتائج</p>`;
    document.getElementsByClassName("ag-paging-description")[0].innerHTML = `<p class="p-font fw-bold">صفحة 0 من 0</p>`;

    //first
    document.getElementsByClassName("ag-paging-button")[0].addEventListener('click', (res) => {

      if (this.filter.currentPage) {

        if (this.filter.currentPage == 1) return;
        this.filter.currentPage = 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      } else {

        if (this.filter.CurrentPage == 1) return;
        this.filter.CurrentPage = 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      }

    })

    //prev
    document.getElementsByClassName("ag-paging-button")[1].addEventListener('click', (res) => {

      if (this.filter.currentPage) {

        if (this.filter.currentPage == 1) return;
        this.filter.currentPage -= 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);

      } else {

        if (this.filter.CurrentPage == 1) return;
        this.filter.CurrentPage -= 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      }

    })

    //next
    document.getElementsByClassName("ag-paging-button")[2].addEventListener('click', (res) => {

      if (this.filter.currentPage) {
        if (this.filter.currentPage == this.PagenationData.totalPages) return;
        this.filter.currentPage += 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      } else {

        if (this.filter.CurrentPage == this.PagenationData.totalPages) return;
        this.filter.CurrentPage += 1;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      }

    })
    //last
    document.getElementsByClassName("ag-paging-button")[3].addEventListener('click', (res) => {

      if (this.filter.currentPage) {

        if (this.filter.currentPage == this.PagenationData.totalPages) return;
        this.filter.currentPage = this.PagenationData.totalPages;
        this.GridDataSurce(this.filter, this.surce, this.fuction);

      } else {

        if (this.filter.CurrentPage == this.PagenationData.totalPages) return;
        this.filter.CurrentPage = this.PagenationData.totalPages;
        this.GridDataSurce(this.filter, this.surce, this.fuction);
      }

    })
  }

  public onPageSizeChanged() {
    var value = (document.getElementById('page-size') as HTMLInputElement)
      .value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  public translation = {
    selectAll: "(تحديد الكل)",
    selectAllSearchResults: "(تحديد كل نتائج البحث)",
    searchOoo: "بحث...",
    blanks: "(فارغ)",
    noMatches: "لا يوجد تتطابق",
    filterOoo: "فلتر...",
    equals: "يساوي",
    notEqual: "لا يساوي",
    empty: "اختر واحدة",
    lessThan: "اقل من",
    greaterThan: "اكبر من",
    lessThanOrEqual: "اقل من او يساوي",
    greaterThanOrEqual: "اكبر من او يساوي",
    inRange: "في المدى",
    inRangeStart: "الى",
    inRangeEnd: "من",
    contains: "يحتوي على",
    notContains: "لا يحتوي على",
    startsWith: "يبدأ بـ",
    endsWith: "ينتهى بـ",
    dateFormatOoo: "yyyy-mm-dd",
    andCondition: "و",
    orCondition: "او",
    applyFilter: "تطبيق",
    resetFilter: "اعادة تعيين",
    clearFilter: "افراغ",
    cancelFilter: "إلغاء",
    textFilter: "فلتر النص",
    numberFilter: "فلتر الرقم",
    dateFilter: "فلتر التاريخ",
    setFilter: "انشاء الفلتر",
    columns: "عمود",
    filters: "الفلاتر",
    pivotMode: "وضع المحور",
    groups: "تجميع الصفوف",
    rowGroupColumnsEmptyMessage: "اسحب الصف هنا لبدأ المجموعة",
    values: "القيم",
    valueColumnsEmptyMessage: "اسحب هنا للتجميع",
    pivots: "عناوين الاعمدة",
    pivotColumnsEmptyMessage: "اسحب هنا لانشاء عنوان عمود",
    group: "مجموعة",
    loadingOoo: "جار التحميل...",
    noRowsToShow: "لا يوجد بيانات لعرضها",
    enabled: "مفعل",
    pinColumn: "تثبيت عمود",
    pinLeft: "تثبيت على اليسار",
    pinRight: "تثبيت على اليمين",
    noPin: "بدون تثبيت",
    valueAggregation: "نتيجة التجميع",
    autosizeThiscolumn: "تحجيم تلقائي لهاذا العمود",
    autosizeAllColumns: "تحجيم تلقائي لكل الاعمدة",
    groupBy: "جمع حسب",
    ungroupBy: "غير مجمع حسب",
    resetColumns: "اعادة تعيين العمود",
    expandAll: "توسيع الكل",
    collapseAll: "اغلاق الكل",
    copy: "نسخ",
    ctrlC: "Ctrl+C",
    copyWithHeaders: "نسخ مع العناوين",
    paste: "لصق",
    ctrlV: "Ctrl+V",
    export: "تصدير",
    csvExport: "CSV تصدير",
    excelExport: "Excel تصدير",
    sum: "مجموع",
    min: "اقل",
    max: "اكبر",
    none: "لايوجد",
    count: "عدد",
    avg: "المعدل",
    filteredRows: "تمت فلترتة",
    selectedRows: "المحدد",
    totalRows: "مجموع الصفوف",
    totalAndFilteredRows: "صف",
    more: "المزيد",
    to: "to",
    of: "of",
    page: "صفحة",
    nextPage: "next",
    lastPage: "last",
    firstPage: "first",
    previousPage: "previous",
    pivotChartAndPivotMode: "Pivot Chart & Pivot Mode",
    pivotChart: "Pivot Chart",
    chartRange: "Chart Range",
    columnChart: "Column",
    groupedColumn: "Grouped",
    stackedColumn: "Stacked",
    normalizedColumn: "100% Stacked",
    barChart: "Bar",
    groupedBar: "Grouped",
    stackedBar: "Stacked",
    normalizedBar: "100% Stacked",
    pieChart: "Pie",
    pie: "Pie",
    doughnut: "Doughnut",
    line: "Line",
    xyChart: "X Y (Scatter)",
    scatter: "Scatter",
    bubble: "Bubble",
    areaChart: "Area",
    area: "Area",
    stackedArea: "Stacked",
    normalizedArea: "100% Stacked",
    histogramChart: "Histogram",
    pivotChartTitle: "Pivot Chart",
    rangeChartTitle: "Range Chart",
    settings: "Settings",
    data: "Data",
    format: "Format",
    categories: "Categories",
    defaultCategory: "(None)",
    series: "Series",
    xyValues: "X Y Values",
    paired: "Paired Mode",
    axis: "Axis",
    navigator: "Navigator",
    color: "Color",
    thickness: "Thickness",
    xType: "X Type",
    automatic: "Automatic",
    category: "Category",
    number: "Number",
    time: "Time",
    xRotation: "X Rotation",
    yRotation: "Y Rotation",
    ticks: "Ticks",
    width: "Width",
    height: "Height",
    length: "Length",
    padding: "Padding",
    spacing: "Spacing",
    chart: "Chart",
    title: "Title",
    titlePlaceholder: "Chart title - double click to edit",
    background: "Background",
    font: "Font",
    top: "Top",
    right: "Right",
    bottom: "Bottom",
    left: "Left",
    labels: "Labels",
    size: "Size",
    minSize: "Minimum Size",
    maxSize: "Maximum Size",
    legend: "Legend",
    position: "Position",
    markerSize: "Marker Size",
    markerStroke: "Marker Stroke",
    markerPadding: "Marker Padding",
    itemSpacing: "Item Spacing",
    itemPaddingX: "Item Padding X",
    itemPaddingY: "Item Padding Y",
    layoutHorizontalSpacing: "Horizontal Spacing",
    layoutVerticalSpacing: "Vertical Spacing",
    strokeWidth: "Stroke Width",
    offset: "Offset",
    offsets: "Offsets",
    tooltips: "Tooltips",
    callout: "Callout",
    markers: "Markers",
    shadow: "Shadow",
    blur: "Blur",
    xOffset: "X Offset",
    yOffset: "Y Offset",
    lineWidth: "Line Width",
    normal: "Normal",
    bold: "Bold",
    italic: "Italic",
    boldItalic: "Bold Italic",
    predefined: "Predefined",
    fillOpacity: "Fill Opacity",
    strokeOpacity: "Line Opacity",
    histogramBinCount: "Bin count",
    columnGroup: "Column",
    barGroup: "Bar",
    pieGroup: "Pie",
    lineGroup: "Line",
    scatterGroup: "X Y (Scatter)",
    areaGroup: "Area",
    histogramGroup: "Histogram",
    groupedColumnTooltip: "Grouped",
    stackedColumnTooltip: "Stacked",
    normalizedColumnTooltip: "100% Stacked",
    groupedBarTooltip: "Grouped",
    stackedBarTooltip: "Stacked",
    normalizedBarTooltip: "100% Stacked",
    pieTooltip: "Pie",
    doughnutTooltip: "Doughnut",
    lineTooltip: "Line",
    groupedAreaTooltip: "Area",
    stackedAreaTooltip: "Stacked",
    normalizedAreaTooltip: "100% Stacked",
    scatterTooltip: "Scatter",
    bubbleTooltip: "Bubble",
    histogramTooltip: "Histogram",
    noDataToChart: "No data available to be charted.",
    pivotChartRequiresPivotMode: "Pivot Chart requires Pivot Mode enabled.",
    chartSettingsToolbarTooltip: "Menu",
    chartLinkToolbarTooltip: "Linked to Grid",
    chartUnlinkToolbarTooltip: "Unlinked from Grid",
    chartDownloadToolbarTooltip: "Download Chart",
    ariaHidden: "hidden",
    ariaVisible: "visible",
    ariaChecked: "checked",
    ariaUnchecked: "unchecked",
    ariaIndeterminate: "indeterminate",
    ariaColumnSelectAll: "Toggle Select All Columns",
    ariaInputEditor: "Input Editor",
    ariaDateFilterInput: "Date Filter Input",
    ariaFilterInput: "Filter Input",
    ariaFilterColumnsInput: "Filter Columns Input",
    ariaFilterValue: "Filter Value",
    ariaFilterFromValue: "Filter from value",
    ariaFilterToValue: "Filter to value",
    ariaFilteringOperator: "Filtering Operator",
    ariaColumnToggleVisibility: "column toggle visibility",
    ariaColumnGroupToggleVisibility: "column group toggle visibility",
    ariaRowSelect: "Press SPACE to select this row",
    ariaRowDeselect: "Press SPACE to deselect this row",
    ariaRowToggleSelection: "Press Space to toggle row selection",
    ariaRowSelectAll: "Press Space to toggle all rows selection",
    ariaSearch: "Search",
    ariaSearchFilterValues: "Search filter values"
  }
}
