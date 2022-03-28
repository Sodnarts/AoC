
def main():
    lanternfish = []
    with open("Day6/input.txt") as fh:
        line = fh.readline().strip()
        tmpLanternfish = line.split(",")
        for i in range(len(tmpLanternfish)):
            lanternfish.append(int(tmpLanternfish[i]))
    return lanternfish
    
def solve(values, days):
    fish = {}
    for i in range(11):
        fish[str(i)] = 0
    for i in values:
        fish[str(i)] += 1

    for i in range(days):
        new_fish = {}
        new_fish['0'] = fish['1']
        new_fish['1'] = fish['2']
        new_fish['2'] = fish['3']
        new_fish['3'] = fish['4']
        new_fish['4'] = fish['5']
        new_fish['5'] = fish['6']
        new_fish['6'] = fish['7']
        new_fish['7'] = fish['8']
        new_fish['6'] += fish['0']
        new_fish['8'] = fish['0']
        fish = new_fish

    return sum(fish.values())
print(solve(main(), 256))