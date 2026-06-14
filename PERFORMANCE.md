# Performance Optimization Report

ATTENTION: in current profiler there is no such metric as Commit duration, so it was replaced to something with similar meaning: Layout effects duration, Passive effects duration. And also added Committed add.

## Baseline Measurements

### Interaction A: Sort countries

- **Committed add**: 2.3 s
- **Render duration**: 272 ms
- **Layout effects duration**: 0.1 ms
- **Passive effects duration**: 0.1 ms
- **Screenshot**: ![screenshot_sort_countries](performance-starter/screenshots/baseline/interaction_a_sort_countries.png)

### Interaction B: Search countries

- **Committed add**: 2.4 s
- **Render duration**: 67 ms
- **Layout effects duration**: 0.1 ms
- **Passive effects duration**: 0.1 ms
- **Screenshot**: ![screenshot_search_countries](performance-starter/screenshots/baseline/interaction_b_search_countries.png)

### Interaction C: Change year

- **Committed add**: 3.9 s
- **Render duration**: 239 ms
- **Layout effects duration**: 0.1 ms
- **Passive effects duration**: 0.1 ms
- **Screenshot**: ![screenshot_change_year](performance-starter/screenshots/baseline/interaction_c_change_year.png)

### Interaction D: Toggle column

- **Committed add**: 1.2 s
- **Render duration**: 219 ms
- **Layout effects duration**: 0.1 ms
- **Passive effects duration**: 0.1 ms
- **Screenshot**: ![screenshot_toggle_column](performance-starter/screenshots/baseline/interaction_d_toggle_column.png)