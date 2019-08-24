// method 1
// good: UseProvider accept strings provided by multiple providers
// bad: 1. no checking on those strings 2. programmer need to know how to obtain the strings
class Provider {
    public IEnumerable<string> ProduceStrings() {
        return new List<string>();
    }
}

class ProviderUser {
    public void UseProvider(IEnumerable<string> strs) {
        strs.Join(",");
    }
}

// method 2
// good: programmer no need to worry how to obtain the strings
// bad: UseProvider accept only the strings provided by Provider2
class Provider2 {
    public IEnumerable<string> ProduceStrings() {
        return new List<string>();
    }
}

class ProviderUser2 {
    public void UseProvider(Provider2 provider2) {
        provider2.ProduceStrings.Join(",");
    }
}

// method 3
// good: favour caching, dependency injection, no need to pass provide2 all the time
// bad: not work if the ProviderUser3 depends on non-static strings
class Provider3 {
    private string[] str;

    public IEnumerable<string> ProduceStrings() {
        if (str != null) {
            return str;
        }

        return str = new List<string>();
    }
}

class ProviderUser3 {
    private Provider2 _provider2;

    public ProviderUser3(Provider2 provider2) {
        _provider2 = provider2;
    }

    public void UseProvider() {
        _provider2.ProduceStrings.Join(",");
    }
}