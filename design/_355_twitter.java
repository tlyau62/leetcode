
/**
 * problem
 * https://leetcode.com/problems/design-twitter/description/
 *
 * related problem
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * 
 * mind flow:
 * 1. draw a digraph on the user relationship (a follow b === a --> b)
 * 2. to get feeds, you needed the users: himself and all his followees
 * 3. once i have the required users: get all the post from those users
 * 4. each tweet posted by certain user is sorted by their time in ascending order
 * 5. merge k list problem can be applied to extract the most 10 recent tweet
 * 
 */
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.PriorityQueue;
import java.util.List;
import java.util.Arrays;

class Post {
    int uid;
    int tid; // not ganrantee in order, so time is needed
    int idx; // relative to user's posts array
    int time; // tid is not ganranteed in order

    Post(int uid, int tid, int idx, int time) {
        this.uid = uid;
        this.tid = tid;
        this.idx = idx;
        this.time = time;
    }
}

class Twitter {

    private HashMap<Integer, ArrayList<Post>> posts;
    private HashMap<Integer, HashSet<Integer>> socials;
    private int time;

    /** Initialize your data structure here. */
    public Twitter() {
        this.posts = new HashMap<>();
        this.socials = new HashMap<>();
        this.time = 0;
    }

    /** Compose a new tweet. O(1) */
    public void postTweet(int userId, int tweetId) {
        ArrayList<Post> user_posts = this.posts.get(userId);

        if (user_posts == null) {
            user_posts = new ArrayList<>();
            this.posts.put(userId, user_posts);
        }
        user_posts.add(new Post(userId, tweetId, user_posts.size(), time++));
    }

    /**
     * similar to merge k sorted list problem. max heap depth => lg n, number of
     * insertion => 10, time => O(10 lg n) => O(lg n) => not O(n lg n), where n is
     * the number of followees of current user. Retrieve the 10 most recent tweet
     * ids in the user's news feed. Each item in the news feed must be posted by
     * users who the user followed or by the user herself. Tweets must be ordered
     * from most recent to least recent.
     */
    public List<Integer> getNewsFeed(int userId) {
        ArrayList<Integer> fromUsers = new ArrayList<>();
        ArrayList<Integer> feeds = new ArrayList<>();
        PriorityQueue<Post> feedQ = new PriorityQueue<>((a, b) -> b.time - a.time);

        // fromUsers => whose feeds are needed to be extracted, included the user and
        // all its followees
        fromUsers.add(userId);
        if (socials.containsKey(userId)) {
            fromUsers.addAll(socials.get(userId));
        }

        // add latest post of each followees to the heap
        ArrayList<Post> postList;
        for (Integer uid : fromUsers) {
            postList = this.posts.get(uid);
            if (postList != null) {
                feedQ.add(postList.get(postList.size() - 1));
            }
        }

        // get feeds
        Post post;
        while (feeds.size() < 10 && !feedQ.isEmpty()) {
            // add max post to feeds
            post = feedQ.remove();
            feeds.add(post.tid);

            // add 2nd max to heap
            if (post.idx > 0) {
                feedQ.add(posts.get(post.uid).get(post.idx - 1));
            }
        }

        return feeds;
    }

    /**
     * O(1) Follower follows a followee. If the operation is invalid, it should be a
     * no-op.
     */
    public void follow(int followerId, int followeeId) {

        if (followerId == followeeId) {
            return;
        }

        HashSet<Integer> followees = this.socials.get(followerId);

        if (followees == null) {
            followees = new HashSet<>();
            this.socials.put(followerId, followees);
        }

        followees.add(followeeId);
    }

    /**
     * O(1) Follower unfollows a followee. If the operation is invalid, it should be
     * a no-op.
     */
    public void unfollow(int followerId, int followeeId) {

        if (followerId == followeeId) {
            // invalid: a user following himself
            return;
        }

        HashSet<Integer> followees = this.socials.get(followerId);

        if (followees != null && followees.contains(followeeId)) {
            followees.remove(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such: Twitter obj =
 * new Twitter(); obj.postTweet(userId,tweetId); List<Integer> param_2 =
 * obj.getNewsFeed(userId); obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */

public class _355_twitter {
    public static void main(String[] args) {
        Twitter twitter = new Twitter();

        twitter.postTweet(1, 5);
        twitter.getNewsFeed(1);
        // twitter.follow(1, 2);
        // twitter.postTweet(2, 6);
        // twitter.getNewsFeed(1);
        // twitter.unfollow(1, 2);
        // twitter.getNewsFeed(1);
    }

}