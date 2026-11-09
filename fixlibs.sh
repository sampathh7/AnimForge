#!/bin/bash
# recreate the SONAME symlinks that snapshots drop, so headless chrome can start
for d in /home/user/chromelibs/root/usr/lib/x86_64-linux-gnu /home/user/chromelibs/root/lib/x86_64-linux-gnu /home/user/chromelibs/root/usr/lib; do
  [ -d "$d" ] || continue
  ( cd "$d" && for f in *; do
      case "$f" in
        *.so.*.*) so="$(echo "$f" | sed -E 's/^(lib.*\.so\.[0-9]+).*/\1/')"; [ -e "$so" ] || ln -sf "$f" "$so";;
      esac
    done )
done
