#include <iostream>
#include <vector>

using namespace std;

pair<int, int> calculateMaxItems(const vector<int>& ids, const vector<int>& costs, int budget, int n) {
    int maxItems = 0, maxCost = 0;

    for (int i = 0; i < n; i++) {
        int cost = costs[i];
        int qty = budget / cost;
        if (qty > 0) {
            int items = 0, totalCost = 0;

            for (int j = 0; j < n; j++) {
                if (i != j && ids[i] % ids[j] == 0) {
                    items += qty;
                    totalCost += costs[j] * qty;
                }
            }

            if (items > maxItems || (items == maxItems && totalCost > maxCost)) {
                maxItems = items;
                maxCost = totalCost;
            }
        }
    }

    return {maxItems, maxCost};
}

int main() {
    int n;
    cin >> n;
    vector<int> ids(n), costs(n);
    for (int i = 0; i < n; i++) cin >> ids[i];
    for (int i = 0; i < n; i++) cin >> costs[i];

    int budget;
    cin >> budget;

    auto result = calculateMaxItems(ids, costs, budget, n);
    cout << result.first << " " << result.second;

    return 0;
}
