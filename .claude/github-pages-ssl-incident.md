# GitHub Pages SSL Certificate Incident - December 18, 2025

## Executive Summary

**Objective:** Configure SSL certificate for apex domain (sanchezlegacyroofing.com) in addition to www subdomain.

**Result:** Failed. After 5+ hours of troubleshooting and waiting, reverted to www-only configuration.

**Decision:** Migrate to Netlify for reliable SSL provisioning.

## Timeline of Events

### Initial State (3:00 PM CST)
- **Working:** www.sanchezlegacyroofing.com with valid SSL
- **Not Working:** sanchezlegacyroofing.com (apex domain) - SSL error
- **Configuration:**
  - CNAME file: `www.sanchezlegacyroofing.com`
  - GitHub Pages: configured for www
  - DNS: www CNAME → mattdreier.github.io

### Attempted Fix (3:00 PM - 8:00 PM CST)

**Changes Made:**
1. Updated CNAME file from `www.sanchezlegacyroofing.com` to `sanchezlegacyroofing.com`
2. Configured GitHub Pages custom domain to apex
3. Added A records in GoDaddy DNS:
   ```
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153
   @ → 185.199.111.153
   ```
4. Initially (incorrectly) set www CNAME → sanchezlegacyroofing.com
5. Later corrected www CNAME → mattdreier.github.io (per GitHub docs)

**Result:** Certificate stuck in "dns_changed" state for 5+ hours

**Status Checks:**
- 3:30 PM: dns_changed
- 4:00 PM: dns_changed
- 5:00 PM: dns_changed
- 6:00 PM: dns_changed
- 7:00 PM: dns_changed
- 8:00 PM: dns_changed

### Revert (8:15 PM CST)

**Actions:**
1. Changed CNAME file back to `www.sanchezlegacyroofing.com`
2. Updated GitHub Pages to www subdomain
3. Waited for deployment

**Result:** www came back up, but certificate also stuck in "new" state for 30+ minutes

### Final State (8:45 PM CST)
- **Working:** www.sanchezlegacyroofing.com with SSL
- **Not Working:** sanchezlegacyroofing.com (apex domain) - same as initial state
- **Status:** Back to square one after 5+ hours

## What Went Wrong

### Primary Issue: GitHub Pages SSL Provisioning
- **Certificate stuck in provisioning:** Both "dns_changed" and "new" states persisted for hours
- **No clear error messages:** GitHub API provided no actionable feedback
- **Unpredictable timing:** Official docs say "up to 15 minutes," reality was 5+ hours with no completion

### Secondary Issues

1. **HSTS Policy Complications:**
   - Previous www configuration had HSTS enabled
   - Browser cached HSTS policy prevented accessing site during transition
   - Even after revert, browsers blocked access until HSTS cache cleared

2. **Documentation Gaps:**
   - Initial attempt used incorrect www CNAME configuration (chained to apex)
   - GitHub's documentation buried the requirement: www CNAME must point to username.github.io
   - Only discovered through research after first attempt failed

3. **DNS Propagation Uncertainty:**
   - Unclear if delays were due to DNS propagation or Let's Encrypt issues
   - Global DNS propagation verified (Google, Cloudflare, Quad9 all showed correct IPs)
   - Issue was definitively on GitHub/Let's Encrypt side

## Lessons Learned

### Technical Lessons

1. **GitHub Pages SSL is unreliable for apex domains**
   - Certificate provisioning can take 24-48 hours or fail entirely
   - No SLA or guaranteed timeline
   - No way to force retry or get detailed error messages

2. **Correct DNS Configuration for GitHub Pages:**
   ```
   A records:
   @ → 185.199.108.153
   @ → 185.199.109.153
   @ → 185.199.110.153
   @ → 185.199.111.153

   CNAME record:
   www → username.github.io (NOT apex domain)
   ```

3. **HSTS Creates Complications:**
   - Once enabled, browsers enforce HTTPS strictly
   - During SSL transitions, site becomes completely inaccessible
   - Requires manual browser cache clearing (chrome://net-internals/#hsts)

### Process Lessons

1. **Set Hard Deadlines for Reverts:**
   - Should have reverted at 6 PM instead of extending to 8 PM
   - Diminishing returns after 2-3 hours of waiting

2. **Research Before Changing:**
   - Should have researched correct www CNAME configuration before making changes
   - Web search revealed multiple users with same issue and solution

3. **Test in Incognito First:**
   - HSTS cache in regular browser masks actual site status
   - Incognito mode provides clearer picture of what users see

## Current Configuration

### DNS Records (GoDaddy)

```
Type: A,     Name: @,   Value: 185.199.108.153,        TTL: 600s
Type: A,     Name: @,   Value: 185.199.109.153,        TTL: 600s
Type: A,     Name: @,   Value: 185.199.110.153,        TTL: 600s
Type: A,     Name: @,   Value: 185.199.111.153,        TTL: 600s
Type: CNAME, Name: www, Value: mattdreier.github.io,   TTL: 600s
```

### Repository Files

- **public/CNAME:** `www.sanchezlegacyroofing.com`
- **dist/CNAME:** `www.sanchezlegacyroofing.com` (built)

### GitHub Pages Settings

- **Custom domain:** www.sanchezlegacyroofing.com
- **Build type:** workflow (GitHub Actions)
- **HTTPS enforced:** false (to allow cert provisioning)
- **Certificate state:** new (perpetually stuck)

## Why Netlify is the Solution

### SSL Provisioning Speed
- **GitHub Pages:** 5+ hours (or never)
- **Netlify:** 30-60 seconds

### Both Domains Work
- Automatic SSL for both apex and www
- No manual configuration required
- Automatic redirects from www to apex (or vice versa)

### Reliability
- Proven track record with Let's Encrypt integration
- Clear error messages if something fails
- Support team can help if issues arise

### Additional Benefits
- Faster global CDN
- Better build performance
- Instant rollbacks
- Branch previews
- Better analytics

## Next Steps: Netlify Migration Plan

### Pre-Migration Checklist
- [ ] Create Netlify account (free tier)
- [ ] Have GoDaddy login credentials ready
- [ ] Ensure latest code is pushed to GitHub

### Migration Steps (1-2 hours total)

1. **Connect Repository to Netlify (15 min)**
   - Sign up at netlify.com
   - Connect GitHub account
   - Import sanchez-legacy-roofing-website repo
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Configure Custom Domain (30 min)**
   - Add custom domain: sanchezlegacyroofing.com
   - Netlify will provide DNS instructions
   - Update GoDaddy DNS:
     - Remove current A records
     - Add Netlify's A records (they'll provide)
     - Update www CNAME to Netlify's subdomain

3. **SSL Provisioning (1 min)**
   - Netlify automatically provisions Let's Encrypt certificate
   - Usually completes in 30-60 seconds
   - Both apex and www get certificates

4. **Testing (15 min)**
   - Verify https://sanchezlegacyroofing.com works
   - Verify https://www.sanchezlegacyroofing.com works
   - Test on mobile and desktop
   - Verify redirects work correctly

5. **Cleanup (10 min)**
   - Disable GitHub Pages on the repository
   - Remove CNAME file from repo (Netlify uses UI config)
   - Update README with new deployment info

### Rollback Plan
If Netlify migration fails, we can revert to GitHub Pages www configuration:
1. Re-enable GitHub Pages
2. Add CNAME file back
3. Update DNS back to GitHub IPs
4. Wait 5-10 minutes for deployment

## Post-Migration Verification

- [ ] Both apex and www URLs work
- [ ] SSL certificates valid (green padlock)
- [ ] Site loads quickly
- [ ] Mobile works (test on phone)
- [ ] Analytics tracking still works
- [ ] All images/assets load correctly
- [ ] Forms still work (if applicable)

## Documentation Updates Needed

After successful migration:
- [ ] Update README.md deployment section
- [ ] Update DNS documentation in README
- [ ] Add Netlify badge to README
- [ ] Document new deployment workflow
- [ ] Update build command if needed

## Conclusion

**Do NOT attempt GitHub Pages apex domain SSL again.** The time investment (5+ hours with no success) far outweighs the cost of using a better platform. Netlify's free tier provides everything needed with reliable, fast SSL provisioning.

**Key Takeaway:** When a tool fights you for hours, switch tools. Developer time is valuable.

---

**File Created:** December 18, 2025, 8:50 PM CST
**Created By:** Claude Code (Sonnet 4.5)
**Purpose:** Prevent future wasted time on GitHub Pages SSL issues
